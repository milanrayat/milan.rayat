# Career Agents

Two nightly agents that write to one Google Sheet:

| Agent | Runs on | When | Writes |
|---|---|---|---|
| **Job Scout** | GitHub Actions (private repo) | 00:00 Europe/Paris | `Jobs` tab |
| **People Scout** | Milan's Mac (`launchd`, throttled) | 00:05 Europe/Paris, or on wake | `People Names` tab + `Companies!G` |

Both append one row per run to `Run Log`.

> Status: **Phase 0 (scaffold)**. Sections marked *(Phase N)* get filled in as each phase lands.

---

## Phase 0: setup checklist (Milan)

### 1. Google Cloud service account (about 10 min)
1. Go to <https://console.cloud.google.com/> and create a project, e.g. `career-agents`.
2. **APIs & Services → Library** → enable **Google Sheets API**.
3. **IAM & Admin → Service Accounts → Create service account**, name it `career-agents`. Skip the optional role steps.
4. Open it → **Keys → Add key → Create new key → JSON**. A `.json` file downloads. Keep it out of every repo.
5. Copy the service account's email (`career-agents@<project>.iam.gserviceaccount.com`).
6. In the Google Sheet: **Share** → paste that email → **Editor** → untick "Notify people" → Share.

### 2. Anthropic API key
1. <https://console.anthropic.com/> → **API Keys → Create key**, name it `career-agents`.
2. Set a monthly spend limit under **Billing → Limits**. Expected cost is a few dollars a month (Haiku 5.5, batched and cached).

### 3. Private GitHub repo
1. Create `career-agents` as a **private** repo on GitHub.
2. Move this folder into it as the repo root (`.github/workflows/` must sit at the root for Actions to run).
3. **Settings → Secrets and variables → Actions** → add:
   - `ANTHROPIC_API_KEY`: the key from step 2
   - `GOOGLE_SERVICE_ACCOUNT_JSON`: the full contents of the JSON file from step 1
   - `SHEET_ID`: the spreadsheet ID

### 4. Mac (needed from Phase 3)
```bash
brew install uv
```
```bash
security add-generic-password -a "$USER" -s career-agents-anthropic -w
```
```bash
security add-generic-password -a "$USER" -s career-agents-google-sa -w "$(cat ~/Downloads/<key-file>.json)"
```
The first `security` command prompts for the key, so it never lands in shell history.

---

## Local development
```bash
make install
```
```bash
make hooks
```
```bash
make test
```
`make help` lists every target.

## Layout
```
agents/job_scout/            Job Scout pipeline
agents/job_scout/sources/    one file per job portal (adapter interface)
agents/people_scout/         People Scout (LinkedIn, read-only)
common/                      sheets, config, logging, llm
prompts/                     LLM system prompts
tests/  tests/edge_cases/    unit, contract, integration, named edge cases
evals/                       golden sets + scorecard (`make eval`)
config.yaml                  all search criteria
```

## How-to (Phase 5)
- Add a job source
- Switch to job mode
- Change cities or timelines
- Re-login to LinkedIn
- Pause / resume the agents
- Read the Run Log
