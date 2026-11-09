"""Load and validate config.yaml. All search criteria come from here, never from code."""

from __future__ import annotations

import os
import re
from datetime import date
from pathlib import Path
from typing import Annotated, Any, Literal, Union

import yaml
from pydantic import BaseModel, Field, model_validator

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_CONFIG = ROOT / "config.yaml"
_ENV_RE = re.compile(r"\$\{([A-Z0-9_]+)\}")


class WindowTimeline(BaseModel):
    type: Literal["window"]
    min_months: int
    max_months: int
    start_after: date
    end_before: date


class FixedTimeline(BaseModel):
    type: Literal["fixed"]
    months: int
    start_month: str = Field(pattern=r"^\d{4}-\d{2}$")


Timeline = Annotated[Union[WindowTimeline, FixedTimeline], Field(discriminator="type")]


class JobScoutConfig(BaseModel):
    mode: Literal["internship", "job"]
    role_keywords: list[str]
    exclude_title_keywords: list[str]
    locations: list[str]
    lookback_hours: int = Field(gt=0)
    sources: list[str] = Field(min_length=1)
    timelines: list[Timeline]
    timeline_include_if_unstated: bool = True
    source_block_threshold: int = 2
    zero_result_warn_nights: int = 3
    weekly_self_check: dict


class LinkedInConfig(BaseModel):
    profile_dir: str
    max_page_loads: int = Field(gt=0, le=150)
    action_delay_seconds: tuple[int, int]
    company_pause_seconds: tuple[int, int]
    max_consecutive_bad_pages: int = 3
    headless: bool = True
    run_timeout_minutes: int = 25
    block_resources: list[str]


class PeopleScoutConfig(BaseModel):
    companies_per_night: int = 10
    people_per_company: int = 5
    india_profile_budget: int = 6
    tiers: list[str]
    exclude_titles: list[str]
    linkedin: LinkedInConfig
    mac: dict


class LLMConfig(BaseModel):
    default_model: str
    escalation_model: str
    escalate_below_confidence: float = Field(ge=0, le=1)
    batch_size: int = Field(gt=0, le=10)
    effort: Literal["low", "medium", "high", "xhigh", "max"] = "low"
    max_tokens: int = 8000
    cache_dir: str


class SheetConfig(BaseModel):
    spreadsheet_id: str
    tabs: dict
    companies_state_column: Literal["G"]
    companies_state_header: str


class Config(BaseModel):
    timezone: str
    sheet: SheetConfig
    llm: LLMConfig
    europe: dict
    job_scout: JobScoutConfig
    people_scout: PeopleScoutConfig

    @model_validator(mode="after")
    def _known_sources(self) -> "Config":
        src_dir = ROOT / "agents" / "job_scout" / "sources"
        # Adapters are added in Phase 2; only enforce once any adapter file exists.
        existing = {p.stem for p in src_dir.glob("*.py") if p.stem not in {"__init__", "base"}}
        if existing:
            missing = set(self.job_scout.sources) - existing
            if missing:
                raise ValueError(f"config lists sources with no adapter file: {sorted(missing)}")
        return self


def _expand_env(node: Any, env: dict[str, str], strict: bool) -> Any:
    """Replace ${VAR} inside string values of the parsed YAML (comments are never touched)."""
    if isinstance(node, dict):
        return {k: _expand_env(v, env, strict) for k, v in node.items()}
    if isinstance(node, list):
        return [_expand_env(v, env, strict) for v in node]
    if not isinstance(node, str):
        return node

    def sub(m: re.Match[str]) -> str:
        name = m.group(1)
        if name in env:
            return env[name]
        if strict:
            raise KeyError(f"environment variable {name} is not set")
        return f"<unset:{name}>"

    return _ENV_RE.sub(sub, node)


def load_config(path: Path | str = DEFAULT_CONFIG, *, strict_env: bool = True,
                env: dict[str, str] | None = None) -> Config:
    """Load config.yaml. strict_env=False lets tests load it without secrets."""
    data = yaml.safe_load(Path(path).read_text(encoding="utf-8"))
    expanded = _expand_env(data, dict(os.environ) if env is None else env, strict_env)
    return Config.model_validate(expanded)
