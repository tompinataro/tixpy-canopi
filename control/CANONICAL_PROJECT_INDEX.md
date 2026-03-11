# Tixpy Canonical Project Index (CANOpi)
Version: v0.1  
Last Updated: 2026-02-27  
Owner: Tom Pinataro  

## Purpose
This document is the **single source of structural truth** for Tixpy projects.  
It is *not* a task list. It records identity, deployment, environment dependencies, agent routing, and audit health.

---

# Project 1 — Bloom Steward
(RouteMaster line • Plant leasing client)

## Identity
- Repo: Bloom-Steward
- Local Path: UNKNOWN (VERIFY)
- Primary Branch: main (VERIFY)
- iOS Bundle ID: UNKNOWN (VERIFY)
- Android Package ID: UNKNOWN (VERIFY)
- App Store Connect (ASC) Numeric App ID: UNKNOWN (VERIFY)
- Google Play Console App ID: UNKNOWN (VERIFY)
- EAS Project ID/Slug: UNKNOWN (VERIFY)
- Heroku App Name: ACTIVE (VERIFY exact app name)

## Deployment State
- Web App: Live (Heroku)
- Mobile iOS: EXISTS (VERIFY latest build ID + status)
- Mobile Android: Parity testing in progress (geo + email)
- Latest iOS Build ID: UNKNOWN (VERIFY)
- Latest Android Build ID: UNKNOWN (VERIFY)
- TestFlight Status: UNKNOWN (VERIFY)
- Internal Testing Status: UNKNOWN (VERIFY)
- Production Status: UNKNOWN (VERIFY)
- Last Submission Date: UNKNOWN (VERIFY)

## Environment Dependencies
- DATABASE_URL (Heroku)
- Expo/EAS env vars: UNKNOWN (VERIFY full list)
- Geo-validation: Implemented and proven on macOS/iOS; Android parity testing pending
- Email notifications: Implemented (VERIFY mechanism + env vars)
- Apple key (.p8): Stored locally (VERIFY canonical location)

## Agent Map
- Codex (VS Code): YES
- Atlas (Browser): YES
- Cove (ChatGPT): YES
- Tixpy Slack Bot: PARTIAL
- Telegram Notify: PARTIAL

## Health & Audit
- Last Grounding Audit: NONE (SET)
- Identity Complete?: NO
- Secrets Verified?: PARTIAL
- Notification Verified?: NO
- Known Drift Risks:
  - Android parity not fully validated
  - ENV list not centralized
  - IDs not canonically recorded

---

# Project 2 — RouteMaster Platform

## Identity
- Repo: RouteMaster
- Local Path: UNKNOWN (VERIFY)
- Primary Branch: main (VERIFY)
- iOS Bundle ID: com.tixpy.routemaster (CONFIRMED)
- Android Package ID: UNKNOWN (VERIFY)
- ASC Numeric App ID: EXISTS (NEEDS RECORDING)
- Google Play Console App ID: UNKNOWN (VERIFY)
- EAS Project ID/Slug: ACTIVE (VERIFY slug)
- Heroku App Name: N/A

## Deployment State
- Latest iOS Build ID: e03a9e96-3afc-4c2f-b4b8-bab7bb854107 (CONFIRMED from prior log)
- Latest Android Build ID: UNKNOWN (VERIFY)
- Submission Status: Blocked previously due to ASC app record missing / not linked (VERIFY current state)
- TestFlight Status: UNKNOWN (VERIFY)
- Production Status: Not live (VERIFY)

## Environment Dependencies
- EAS configured (VERIFY project ownership + slug)
- ASC .p8 key: Stored locally (VERIFY canonical location)
- Expo/EAS env vars: UNKNOWN (VERIFY)
- Telegram notifications: Working, but project labeling is ambiguous

## Agent Map
- Codex (VS Code): YES
- Atlas (Browser): YES
- Cove (ChatGPT): YES
- Tixpy Slack Bot: YES
- Telegram Notify: YES (NEEDS “project name + artifact type” labeling)

## Health & Audit
- Last Grounding Audit: NONE (SET)
- Identity Complete?: PARTIAL
- Secrets Verified?: PARTIAL
- Notification Verified?: NO
- Known Drift Risks:
  - ASC numeric App ID not recorded in canon
  - Android package may diverge from iOS bundle assumptions
  - ENV list not centralized

---

# Project 3 — Pull-Tab Valet

## Identity
- Repo: Pull-Tab-Valet
- Local Path: UNKNOWN (VERIFY)
- Primary Branch: main (VERIFY)
- iOS Bundle ID: UNKNOWN (VERIFY + record final)
- Android Package ID: UNKNOWN (VERIFY + record final)
- ASC Numeric App ID: EXISTS (VERIFY + record)
- Google Play Console App ID: UNKNOWN (VERIFY)
- EAS Project ID/Slug: UNKNOWN (VERIFY)
- Heroku App Name: N/A

## Deployment State
- iOS Build: Exists (VERIFY latest build ID + status)
- Android Build: Exists (VERIFY latest build ID + status)
- Submission Status: UNKNOWN (VERIFY)
- TestFlight Status: UNKNOWN (VERIFY)
- Production Status: Not live (VERIFY)

## Environment Dependencies
- ASC key configured (VERIFY canonical location)
- Expo/EAS env vars: UNKNOWN (VERIFY)
- Telegram notifications: YES (Needs explicit project tagging)
- Slack bot integration: YES

## Agent Map
- Codex (VS Code): YES
- Atlas (Browser): YES
- Cove (ChatGPT): YES
- Tixpy Slack Bot: YES
- Telegram Notify: YES

## Health & Audit
- Last Grounding Audit: NONE (SET)
- Identity Complete?: LOW
- Secrets Verified?: PARTIAL
- Notification Verified?: NO
- Known Drift Risks:
  - Bundle/package identity drift due to past “new bundle id” discussions
  - IDs not canonically recorded
  - ENV list not centralized

---

# Project 4 — Pool Steward

## Identity
- Repo: Pool-Steward
- Local Path: UNKNOWN (VERIFY)
- Primary Branch: main (VERIFY)
- iOS Bundle ID: UNKNOWN (VERIFY)
- Android Package ID: UNKNOWN (VERIFY)
- ASC Numeric App ID: UNKNOWN (VERIFY)
- Google Play Console App ID: UNKNOWN (VERIFY)
- EAS Project ID/Slug: UNKNOWN (VERIFY)
- Heroku App Name: N/A

## Deployment State
- iOS Build: Exists (VERIFY latest build ID + status)
- Android Build: Exists (VERIFY latest build ID + status)
- Submission Status: UNKNOWN (VERIFY)
- TestFlight Status: UNKNOWN (VERIFY)
- Production Status: Not live (VERIFY)

## Environment Dependencies
- Expo/EAS env vars: UNKNOWN (VERIFY)
- Telegram notifications: YES (Needs explicit project tagging)
- Slack bot integration: YES

## Agent Map
- Codex (VS Code): YES
- Atlas (Browser): YES
- Cove (ChatGPT): YES
- Tixpy Slack Bot: YES
- Telegram Notify: YES

## Health & Audit
- Last Grounding Audit: NONE (SET)
- Identity Complete?: PARTIAL
- Secrets Verified?: LOW
- Notification Verified?: NO
- Known Drift Risks:
  - IDs not canonically recorded
  - ENV list not centralized

---

# Project 5 — DVD_Valet (Expo MVP)

## Identity
- Repo: DVD_Valet
- Local Path: UNKNOWN (VERIFY)
- Primary Branch: main (VERIFY)
- iOS Bundle ID: NOT SET (TBD)
- Android Package ID: NOT SET (TBD)
- ASC Numeric App ID: N/A
- Google Play Console App ID: N/A
- EAS Project ID/Slug: UNKNOWN (VERIFY if created)
- Heroku App Name: N/A

## Deployment State
- MVP Scaffold: Planned / in progress (VERIFY current)
- Builds: NONE (as of v0.1)
- Production: NONE

## Environment Dependencies
- Expo scaffold required
- No secrets configured (as of v0.1)
- No notifications configured (as of v0.1)

## Agent Map
- Codex (VS Code): INITIATED
- Atlas (Browser): OPTIONAL
- Cove (ChatGPT): YES
- Tixpy Slack Bot: NO (TBD)
- Telegram Notify: NO (TBD)

## Health & Audit
- Last Grounding Audit: NONE (SET)
- Identity Complete?: LOW
- Drift Risk: HIGH (early-stage entropy)

---

# Cross-Project Grounding Gaps (Initial)
- Canonical IDs missing across projects (ASC numeric IDs, Play IDs, EAS slugs)
- Build IDs not centrally logged
- Telegram notifications not consistently labeled with “project + artifact type”
- ENV requirements not centrally listed per project
- No scheduled grounding audits (quarterly recommended)

---

# New App Creation Baseline (Google Play)
- Requirement: Before first Play submission, ensure all required metadata components are present using Bloom Steward as the structural model.
- Required components:
  - `docs/privacy/index.html` published and linked as Privacy Policy URL
  - `docs/support/index.html` published with account/data deletion instructions
  - Direct account deletion request URL in format: `https://tompinataro.github.io/<Repo>/support#account-deletion`
  - Store listing graphics prepared (`mobile/assets/playstore-icon.png`, `mobile/assets/feature-graphic.png`)
  - Screenshot set prepared and stored in repo (recommended: `docs/release/SCREENSHOTS/`)
  - Play Console app content completed (privacy, data safety, content rating, and related declarations)

---

# Operating Modes
- **Flow Mode:** minimal, sequential instructions for velocity
- **Audit Mode:** verify IDs, env vars, deployment state, notification routing; update this index
