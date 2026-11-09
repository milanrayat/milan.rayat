.DEFAULT_GOAL := help
UV ?= uv
PY := $(UV) run --python 3.12
PLIST := $(HOME)/Library/LaunchAgents/com.milan.peoplescout.plist

.PHONY: help install hooks test eval jobs-dry jobs-run people-dry people-run linkedin-login status pause resume

help:
	@grep -E '^[a-z-]+:.*## ' $(MAKEFILE_LIST) | awk -F':.*## ' '{printf "  %-16s %s\n", $$1, $$2}'

install: ## Install dependencies (uv, Python 3.12)
	$(UV) sync --python 3.12

hooks: ## Install the pre-commit hook that runs `make test`
	git config core.hooksPath .githooks

test: ## Unit, contract and integration tests (no network)
	$(PY) pytest -m "not network"

eval: ## Real-LLM eval on the golden sets; fails if any gate is missed
	@if ls evals/*.jsonl >/dev/null 2>&1; then $(PY) python -m evals.run; \
	else echo "eval: no golden sets yet (built in Phase 2/3)"; fi

jobs-dry: ## Phase 2: Job Scout dry run (prints rows, writes nothing)
	@echo "Not built yet (Phase 2)"; exit 1

jobs-run: ## Phase 2: Job Scout real run
	@echo "Not built yet (Phase 2)"; exit 1

people-dry: ## Phase 3: People Scout dry run on 1 company
	@echo "Not built yet (Phase 3)"; exit 1

people-run: ## Phase 3: People Scout real run
	@echo "Not built yet (Phase 3)"; exit 1

linkedin-login: ## Phase 3: open headed browser on the dedicated profile for manual login
	@echo "Not built yet (Phase 3)"; exit 1

status: ## Phase 4: print the last Run Log rows
	@echo "Not built yet (Phase 4)"; exit 1

pause: ## Unload the People Scout launchd job
	launchctl unload $(PLIST)

resume: ## Load the People Scout launchd job
	launchctl load $(PLIST)
