import type { Href } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  APP_STORE_BLOOM_URL,
  GOOGLE_PLAY_PTV_URL,
  TESTFLIGHT_DVD_URL,
  TESTFLIGHT_POOL_URL,
} from '@/src/config/links';

export type AppBadge = 'live' | 'demo';

export type StoreType = 'App Store' | 'Google Play' | 'TestFlight';

export type AppLink = {
  storeType: StoreType;
  url: string;
};

export type ShowcaseApp = {
  name: string;
  description: string;
  badge: AppBadge;
  icon: any;
  /**
   * Phase 1 compatibility: single primary link.
   * Phase 2: prefer `links` (multiple store options per app).
   */
  storeType: StoreType;
  url: string;
  links?: AppLink[];
};

export type ShowcasePlatform = {
  slug: 'routemaster' | 'valetballet';
  href: Href;
  title: string;
  description: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  apps: ShowcaseApp[];
};

const ICONS = {
  bloom: require('../../assets/app-icons/bloom.png'),
  pool: require('../../assets/app-icons/pool.png'),
  pulltab: require('../../assets/app-icons/pulltab.png'),
  dvd: require('../../assets/app-icons/dvd.png'),
  routemaster: require('../../assets/app-icons/routemaster.png'),
};

export const ROUTEMASTER_PLATFORM: ShowcasePlatform = {
  slug: 'routemaster',
  href: '/routemaster',
  title: 'RouteMaster',
  description: '… customized mobile dashboards for offsite workflows',
  iconName: 'map-marker-path',
  apps: [
    {
      name: 'Bloom Steward',
      description: 'Live RouteMaster production app in the Apple App Store.',
      badge: 'live',
      icon: ICONS.bloom,
      storeType: 'App Store',
      url: APP_STORE_BLOOM_URL,
      links: [
        { storeType: 'App Store', url: APP_STORE_BLOOM_URL },
      ],
    },
    {
      name: 'Pool Steward',
      description: 'RouteMaster demo build available through TestFlight.',
      badge: 'demo',
      icon: ICONS.pool,
      storeType: 'TestFlight',
      url: TESTFLIGHT_POOL_URL,
      links: [
        { storeType: 'TestFlight', url: TESTFLIGHT_POOL_URL },
      ],
    },
  ],
};

export const VALET_BALLET_PLATFORM: ShowcasePlatform = {
  slug: 'valetballet',
  href: '/valetballet',
  title: 'Valet Ballet',
  description: '… desktop and mobile platforms to account for goods and services',
  iconName: 'car-shift-pattern',
  apps: [
    {
      name: 'Pull-Tab Valet',
      description: 'Live Valet Ballet production app on Google Play.',
      badge: 'live',
      icon: ICONS.pulltab,
      storeType: 'Google Play',
      url: GOOGLE_PLAY_PTV_URL,
      links: [
        { storeType: 'Google Play', url: GOOGLE_PLAY_PTV_URL },
      ],
    },
    {
      name: 'DVD Valet',
      description: 'Valet Ballet demo build distributed through TestFlight.',
      badge: 'demo',
      icon: ICONS.dvd,
      storeType: 'TestFlight',
      url: TESTFLIGHT_DVD_URL,
      links: [
        { storeType: 'TestFlight', url: TESTFLIGHT_DVD_URL },
      ],
    },
  ],
};

export const PLATFORMS: ShowcasePlatform[] = [ROUTEMASTER_PLATFORM, VALET_BALLET_PLATFORM];
