import type { Href } from 'expo-router';

import {
  APP_STORE_BLOOM_URL,
  APP_STORE_DVD_URL,
  APP_STORE_POOL_URL,
  APP_STORE_PULLTAB_URL,
  MACOS_PULLTAB_URL,
  DEMO_BLOOM_URL,
  DEMO_DVD_URL,
  DEMO_POOL_URL,
  DEMO_PULLTAB_URL,
  GOOGLE_PLAY_BLOOM_URL,
  GOOGLE_PLAY_DVD_URL,
  GOOGLE_PLAY_POOL_URL,
  GOOGLE_PLAY_PULLTAB_URL,
} from '@/src/config/links';

export type AppBadge = 'live' | 'demo';

export type AppActionType = 'appStore' | 'googlePlay' | 'macos' | 'demo';

export type AppLink = {
  type: AppActionType;
  url?: string | null;
};

export type ShowcaseApp = {
  name: string;
  description: string;
  badge: AppBadge;
  icon: any;
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

function createActionLinks(urls: {
  appStore?: string | null;
  googlePlay?: string | null;
  macos?: string | null;
  demo?: string | null;
}): AppLink[] {
  return [
    { type: 'appStore', url: urls.appStore ?? null },
    { type: 'googlePlay', url: urls.googlePlay ?? null },
    { type: 'macos', url: urls.macos ?? null },
    { type: 'demo', url: urls.demo ?? null },
  ];
}

export const ROUTEMASTER_PLATFORM: ShowcasePlatform = {
  slug: 'routemaster',
  href: '/routemaster',
  title: 'RouteMaster',
  description: '… customized mobile dashboards for offsite workflows',
  apps: [
    {
      name: 'Bloom Steward',
      description: 'RouteMaster production app with direct public listing links as they become available.',
      badge: 'live',
      icon: ICONS.bloom,
      links: createActionLinks({
        appStore: APP_STORE_BLOOM_URL,
        googlePlay: GOOGLE_PLAY_BLOOM_URL,
        demo: DEMO_BLOOM_URL,
      }),
      availabilityNote: 'Google Play and demo links pending',
    },
    {
      name: 'Pool Steward',
      description: 'RouteMaster app card prepared for direct App Store, Google Play, and demo links.',
      badge: 'live',
      icon: ICONS.pool,
      links: createActionLinks({
        appStore: APP_STORE_POOL_URL,
        googlePlay: GOOGLE_PLAY_POOL_URL,
        demo: DEMO_POOL_URL,
      }),
      availabilityNote: 'Links now live (App Store / Play as available)',
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
      description: 'Valet Ballet app card prepared for direct App Store, Google Play, macOS, and demo links.',
      badge: 'live',
      icon: ICONS.pulltab,
      links: createActionLinks({
        appStore: APP_STORE_PULLTAB_URL,
        googlePlay: GOOGLE_PLAY_PULLTAB_URL,
        macos: MACOS_PULLTAB_URL,
        demo: DEMO_PULLTAB_URL,
      }),
      availabilityNote: 'macOS link pending',
    },
    {
      name: 'DVD Valet',
      description: 'Valet Ballet app card prepared for direct App Store, Google Play, and demo links.',
      badge: 'demo',
      icon: ICONS.dvd,
      links: createActionLinks({
        appStore: APP_STORE_DVD_URL,
        googlePlay: GOOGLE_PLAY_DVD_URL,
        demo: DEMO_DVD_URL,
      }),
      availabilityNote: 'Public store and demo links pending',
    },
  ],
};

export const PLATFORMS: ShowcasePlatform[] = [ROUTEMASTER_PLATFORM, VALET_BALLET_PLATFORM];
