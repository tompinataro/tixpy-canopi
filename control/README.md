# Canopi (CANO-nical P-roject I-ndex)

This folder now lives inside `/Users/tompinataro/My Projects/Tixpy-Canopi/control`.

It contains the **canonical structural truth** for Tixpy projects:
- `CANONICAL_PROJECT_INDEX.md` — the System of Record

It also now holds **continuity mirrors** for the Action Grid:
- `projects.csv` — mirror of the live operational grid from `/Users/tompinataro/clawd-openaiclawdbot/action-grid/projects.csv`
- `tracker-view.html` — persistent HTML dashboard mirrored from `/Users/tompinataro/clawd-openaiclawdbot/action-grid/tracker-view.html`

Important:
- The live source of truth for operational grid state remains `/Users/tompinataro/clawd-openaiclawdbot/action-grid/projects.csv`
- Files in `Canopi` are persistence/continuity mirrors so the grid can be found from the canonical project folder too
- Refresh mirrors with `npm run action-grid:view` from `/Users/tompinataro/clawd-openaiclawdbot`

## Repo decision
Original recommendation: use a dedicated repo named **`tixpy-control`** as the control plane.

Why that was recommended:
- Keeps control-plane governance decoupled from any single codebase (OpenClaw/Tixpy, RouteMaster, etc.)
- Lets every agent treat one repo as the canonical truth
- Avoids mixing bot implementation details with multi-project governance

Current local layout:
- The control-plane files are intentionally colocated under `Tixpy-Canopi/control`
- The system of record remains separate from the Expo app code by directory boundary rather than by standalone repo

## Conversation log (posterity)
Tom requested:
- A canonical project index + grounding map + grounding gap audit + visual chart
- A repo decision (standalone control repo vs housing inside OpenClaw-Tixpy)
- A Canopi folder containing the index and a README capturing this decision and intent

Cove delivered:
- Grid ≠ Index: Grid tracks motion; Index anchors structural truth
- Recommendation: layer index beneath the grid (keep the grid as the activity surface)
- CANONICAL_PROJECT_INDEX.md v0.1 with explicit UNKNOWN/VERIFY placeholders

## Next actions
1. Keep control-plane files under `Tixpy-Canopi/control`
2. Fill gaps in Audit Mode (ASC numeric IDs, Play IDs, EAS slugs, bundle/package IDs, build IDs)
3. Standardize Telegram notifications: project + artifact type + build link
4. Keep Action Grid continuity mirrors current via `npm run action-grid:view`
