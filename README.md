# Tixpy Canopi

Tixpy Canopi is an Expo + React Native portfolio container app that showcases two Tixpy platforms and their published/demo app links:

- RouteMaster
  - Bloom Steward (live)
  - Pool Steward (demo)
- Valet Ballet
  - Pull-Tab Valet (live)
  - DVD Valet (demo)

## Run locally

```bash
npm install
npx expo start
```

Then press:
- `i` for iOS
- `a` for Android
- `w` for web

## Configure links

Update all external URLs in:

- `src/config/links.ts`

Replace the placeholder constants:
- `APP_STORE_BLOOM_URL`
- `GOOGLE_PLAY_PTV_URL`
- `TESTFLIGHT_POOL_URL`
- `TESTFLIGHT_DVD_URL`
