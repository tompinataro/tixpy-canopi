import type { Href } from 'expo-router';

import {
  APP_STORE_BLOOM_URL,
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
  storeType?: StoreType;
  url?: string;
  links?: AppLink[];
  availabilityNote?: string;
};

export type ShowcasePlatform = {
  slug: 'routemaster' | 'valetballet';
  href: Href;
  title: string;
  description: string;
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
  apps: [
    {
      name: 'Pull-Tab Valet',
      description: 'Public store link pending while the Google Play release is not yet live.',
      badge: 'live',
      icon: ICONS.pulltab,
      availabilityNote: 'Google Play link pending',
    },
    {
      name: 'DVD Valet',
      description: 'Public iOS link pending while the TestFlight/App Store URL is not yet configured.',
      badge: 'demo',
      icon: ICONS.dvd,
      availabilityNote: 'Public link pending',
    },
  ],
};

export const PLATFORMS: ShowcasePlatform[] = [ROUTEMASTER_PLATFORM, VALET_BALLET_PLATFORM];
