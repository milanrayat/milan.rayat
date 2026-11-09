"""Phase 0 smoke tests: config parses, layout exists, secrets are not committed."""

from pathlib import Path

import pytest

from common.config import ROOT, load_config


def test_config_loads_without_secrets():
    cfg = load_config(strict_env=False, env={})
    assert cfg.job_scout.mode == "internship"
    assert cfg.llm.default_model == "claude-haiku-5-5"
    assert cfg.llm.escalation_model == "claude-sonnet-5-5"
    assert cfg.people_scout.linkedin.max_page_loads <= 150
    assert len(cfg.job_scout.timelines) == 3


def test_config_requires_sheet_id_in_strict_mode():
    with pytest.raises(KeyError, match="SHEET_ID"):
        load_config(strict_env=True, env={})


def test_sheet_id_comes_from_env():
    cfg = load_config(env={"SHEET_ID": "abc123"})
    assert cfg.sheet.spreadsheet_id == "abc123"


@pytest.mark.parametrize("rel", [
    "agents/job_scout/sources", "agents/people_scout", "common", "prompts",
    "tests/edge_cases", "evals", "Makefile", "config.yaml", "CLAUDE.md", "README.md",
])
def test_layout(rel):
    assert (ROOT / rel).exists(), rel


def test_no_secrets_committed():
    suspicious = ("sk-ant-", "\"private_key\":", "BEGIN PRIVATE KEY")
    for p in ROOT.rglob("*"):
        if not p.is_file() or any(part.startswith(".") for part in p.relative_to(ROOT).parts):
            continue
        if p.suffix not in {".py", ".yaml", ".yml", ".json", ".md", ".toml", ".txt"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for s in suspicious:
            assert s not in text or p.name == "test_scaffold.py", f"{s!r} found in {p}"
