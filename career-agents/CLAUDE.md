# Career Agents — rules for Claude

After any code change run `make test`; after any change to filters, prompts, parsers or ranking also run `make eval`. Do not commit if either fails.

## Hard rules
- People Scout is READ-ONLY on LinkedIn: no connection requests, messages, likes, follows or endorsements.
- Never solve, bypass or retry through a CAPTCHA, checkpoint, "unusual activity" page or login wall. Abort, log, notify.
- Never use Milan's main Chrome profile. Only `~/.career-agents/linkedin-profile/` (chmod 700).
- Google Sheet is append-only. Never overwrite, reorder, delete or reformat existing rows/columns. Only append rows, create the `Jobs` / `Run Log` tabs, and write `Companies!G`.
- Never write `Companies!C:F`.
- No duplicates, no invented data (`Not stated` when a field is absent), no hard-coded secrets.
- Search criteria, cities, timelines and model names live in `config.yaml`, not code.
- Each job source is one file in `agents/job_scout/sources/` implementing the adapter interface.
- Write to Sheets incrementally (one company / one batch at a time). `Companies!G` is written only after that company's people rows succeed.
- Every run appends one row to `Run Log`.
- Ask Milan before anything that needs his hands: credentials, LinkedIn login, sharing the sheet, installing launchd jobs.

## LLM notes
- Haiku 5.5 / Sonnet 5.5 reject non-default `temperature` (400). Determinism comes from structured outputs (`output_config.format`), effort `low`, deterministic Python rules and the result cache — not temperature.
- Forced `tool_choice` is rejected on Sonnet 5.5; use structured outputs.
