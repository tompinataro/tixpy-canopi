# Agent Operating Rules (Canonical) — Canopi

Applies to: Cove (ChatGPT), Codex CLI, Atlas, Tixpy/ClawDBot, and any future agents.

## Universal rules
- Prefer ONE actionable step at a time for terminal work.
- Shell commands must be copy/pastable with NO comment lines.
- Before making changes: state what you will change and where (file/path).
- After changes: run the fastest relevant check (lint/test/build) when available and report results.
- If a task spans multiple repos: do not roam—ask which repo to open next.

## Pinataro project rule
- When coding begins for the pinataro project:
  - If not already on `phase1-integration`, run:
    - `git checkout -b phase1-integration` (create if missing) OR
    - `git checkout phase1-integration` (switch if it exists)

## Delivery & comms
- Summaries should be brief and concrete (what changed, where, what to run next).
- If blocked: report the exact error and the most likely cause.

