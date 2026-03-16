# Tixpy Canopi

Tixpy Canopi is an Expo + React Native portfolio container app that showcases Tixpy platforms and app links in a clean, card-based mobile UI.

Repository:
- `https://github.com/tompinataro/tixpy-canopi`

This project also houses the Tixpy control-plane docs and continuity mirrors under `control/`.

## What this app includes

Home (`/`) shows:
- Title: `Tixpy Canopi`
- Subtitle: `Portfolio Container`
- Device hint tag using `Platform.OS` (`iOS` / `Android` / `Web`)
- Two platform cards:
  - RouteMaster
    - Bloom Steward (`live`) -> App Store button
    - Pool Steward (`demo`) -> TestFlight button
  - Valet Ballet
    - Pull-Tab Valet (`live`) -> public link pending
    - DVD Valet (`demo`) -> public link pending

Platform pages:
- `/routemaster` (larger cards with descriptions + buttons)
- `/valetballet` (larger cards with descriptions + buttons)
- `/about` (optional app summary page)

## Tech + structure

- Expo (TypeScript)
- Expo Router
- Targets iOS + Android (and Web for preview)
- Reusable components:
  - `PlatformCard`
  - `AppItemCard` (badge + store type support)
  - `PrimaryButton`
  - `SecondaryButton`

## Link configuration (important)

Update all external links in this file:

- Relative path: `src/config/links.ts`
- Absolute path: `/Users/tompinataro/My Projects/Tixpy-Canopi/src/config/links.ts`

Verified public links today:
- `APP_STORE_BLOOM_URL`
- `TESTFLIGHT_POOL_URL`

Unverified or pending public links:
- `GOOGLE_PLAY_PTV_URL`
- `TESTFLIGHT_DVD_URL`

External links are opened via React Native `Linking` and show a friendly alert if opening fails.

## Branding assets

Canonical logo source:
- `assets/branding/tixpy-canopi-logo-master.svg`

Generated branding outputs:
- `assets/branding/tixpy-canopi-logo-master.png`
- `assets/branding/tixpy-canopi-square-1024.png`
- `assets/branding/tixpy-canopi-icon-512.png`
- `assets/branding/tixpy-canopi-icon-192.png`
- `assets/branding/tixpy-canopi-icon-180.png`
- `assets/branding/tixpy-canopi-icon-152.png`
- `assets/branding/tixpy-canopi-favicon-32.png`
- `assets/branding/tixpy-canopi-favicon-16.png`

Expo-facing assets:
- `assets/icon.png`
- `assets/adaptive-icon.png`
- `assets/favicon.png`

To regenerate all branding assets from the SVG master:

```bash
npm run branding:generate
```

Notes:
- The app icon variant is simplified for readability at smaller sizes (canopy + columns + `TC` monogram).
- The favicon variant is further simplified (canopy + `TC`) for clarity at `32x32` and `16x16`.
- Android adaptive icon uses a transparent foreground image (`assets/adaptive-icon.png`) with brand background color `#f2e7df`.
- If the master SVG changes, rerun `npm run branding:generate` before building or releasing.

## Run locally

```bash
npm install
npx expo start
```

Then press:
- `i` for iOS simulator
- `a` for Android emulator/device
- `w` for Web

## Current status

- Initial scaffold commit message:
  - `Initial scaffold for Tixpy Canopi showcase app`
