# Tixpy Canopi

Tixpy Canopi is an Expo + React Native portfolio container app that showcases Tixpy platforms and app links in a clean, card-based mobile UI.

Repository:
- `https://github.com/tompinataro/tixpy-canopi`

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
    - Pull-Tab Valet (`live`) -> Google Play button
    - DVD Valet (`demo`) -> TestFlight button

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
- Absolute path: `/Users/tompinataro/My Projects/tixpy-canopi/src/config/links.ts`

Replace these placeholder constants:
- `APP_STORE_BLOOM_URL`
- `GOOGLE_PLAY_PTV_URL`
- `TESTFLIGHT_POOL_URL`
- `TESTFLIGHT_DVD_URL`

External links are opened via React Native `Linking` and show a friendly alert if opening fails.

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
