# Daily Release Tracker

Use this page at the start of each work session.

Rules:
- Pick only one app for Apple work, or one shared Android batch task.
- Do not switch stores mid-session unless the current task is fully blocked.
- End each session by updating `Current state`, `Blocker`, and `Next action`.

## Midterm Goal

Get all four apps submitted and approved in App Store Connect and Google Play.

## Fastest Path Right Now

1. Pool Steward on Apple
2. DVD Valet on Apple
3. Pull-Tab Valet on Apple
4. Google Play batch work for Pool Steward, Pull-Tab Valet, and DVD Valet

Why this order:
- `Bloom Steward` is already done in both store workflows.
- `Pool Steward` is already in Apple review history and appears closest to resolution.
- `DVD Valet` already has an ASC app record and a submission in motion.
- `Pull-Tab Valet` already shows completed ASC submission evidence.
- Google Play is slower for all three remaining apps because the blocker pattern is shared:
  - missing metadata/icons
  - prior service account permission issue
  - closed testing / 12 tester production gate

## Current Snapshot

| App | Apple | Google Play | Best Next Move |
| --- | --- | --- | --- |
| Bloom Steward | Done | Done | Leave alone |
| Pool Steward | ✅ Open for Distribution | Blocked by metadata/icons and Play rollout gate | Shift focus to next Apple app (DVD or Pull-Tab) |
| Pull-Tab Valet | ASC submission evidence marked done | Blocked by metadata/icons and Play rollout gate | Verify Apple status next |
| DVD Valet | ASC submission shown as running; app ID exists | Blocked by metadata/icons and Play rollout gate | Push Apple state to clarity/completion |

## Today Board

Fill this in each morning before you start:

- Today's focus:
- Store:
- One success condition for today:
- What I will ignore today:

## App Rows

### Bloom Steward

- Current state: Done in Apple and Google Play workflows
- Blocker: None worth active attention
- Next action: Do nothing unless a store issue appears

### Pool Steward

- Current state: ✅ Apple is **Open for Distribution**
- Blocker: Google Play still blocked by metadata/icons and Play production gate
- Next action: Start Android batch only after next Apple lane is clear (DVD or Pull-Tab)

### Pull-Tab Valet

- Current state: ASC submission evidence marked done on February 25, 2026; Google Play blocked
- Blocker: Apple status needs verification in the live ASC record; Google Play not ready for production path
- Next action: After Pool and DVD, confirm whether Apple is approved, in review, or missing final metadata

### DVD Valet

- Current state: ASC app ID exists (`6759878534`); submission tracker shows running; Google Play blocked
- Blocker: Apple state is unclear and needs confirmation in ASC; Google Play not ready
- Next action: Check the current ASC submission state and determine whether it is waiting, rejected, or needs manual completion

## Shared Android Batch

Do this only after the Apple lane is under control.

- Finish metadata for Pool Steward, Pull-Tab Valet, and DVD Valet
- Confirm final store graphics/icons for all three
- Confirm service-account permissions are really fixed
- Prepare internal or closed testing once, then reuse the process
- Treat the 12-tester requirement as a rollout project, not an app-specific surprise

## Session Closeout Template

Copy this and fill it in at the end of every work session:

```text
Date:
App:
Store:
Current state:
Blocker:
Next action:
```

## This Week Plan

### Day 1

- Focus: Pool Steward on Apple
- Goal: identify exact live Apple status

### Day 2

- Focus: Pool Steward on Apple
- Goal: perform the concrete next step needed for re-review or resubmission

### Day 3

- Focus: DVD Valet on Apple
- Goal: identify exact live Apple status

### Day 4

- Focus: DVD Valet on Apple
- Goal: finish missing Apple work and push it forward

### Day 5

- Focus: Pull-Tab Valet on Apple
- Goal: verify exact Apple status and finish the next missing step

### Day 6

- Focus: Android batch prep
- Goal: finish metadata/icons/process for Pool, Pull-Tab, and DVD

### Day 7

- Focus: Google Play submission path
- Goal: move at least one Android app into active Play workflow without context-switching
