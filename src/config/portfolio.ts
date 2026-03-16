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

export type ShowcasePreview =
  | {
      kind: 'video';
      source: any;
      label: string;
    }
  | {
      kind: 'placeholder';
      label: string;
    };

export type ShowcaseApp = {
  name: string;
  description: string;
  badge: AppBadge;
  icon: any;
  showcaseSummary: string;
  storeType?: StoreType;
  url?: string;
  links?: AppLink[];
  availabilityNote?: string;
  preview?: ShowcasePreview;
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

const DEMOS = {
  bloom: require('../../assets/demos/bloom-demo.mp4'),
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
      showcaseSummary: 'A field-first route app for plant-care crews, with visits designed to move quickly from arrival to completion.',
      storeType: 'App Store',
      url: APP_STORE_BLOOM_URL,
      links: [
        { storeType: 'App Store', url: APP_STORE_BLOOM_URL },
      ],
      preview: {
        kind: 'video',
        source: DEMOS.bloom,
        label: 'Bloom Steward walkthrough',
      },
    },
    {
      name: 'Pool Steward',
      description: 'RouteMaster demo build available through TestFlight.',
      badge: 'demo',
      icon: ICONS.pool,
      showcaseSummary: 'Checklist-driven pool service flow with check-in, completion notes, and an interface tuned for technicians in motion.',
      storeType: 'TestFlight',
      url: TESTFLIGHT_POOL_URL,
      links: [
        { storeType: 'TestFlight', url: TESTFLIGHT_POOL_URL },
      ],
      preview: {
        kind: 'placeholder',
        label: 'Pool Steward screen recording coming soon',
      },
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
      showcaseSummary: 'A compact operations workflow for pull-tab teams, built around quick visual status and low-friction task handling.',
      availabilityNote: 'Google Play link pending',
      preview: {
        kind: 'placeholder',
        label: 'Pull-Tab Valet screen recording coming soon',
      },
    },
    {
      name: 'DVD Valet',
      description: 'Public iOS link pending while the TestFlight/App Store URL is not yet configured.',
      badge: 'demo',
      icon: ICONS.dvd,
      showcaseSummary: 'A physical-media management concept with a cleaner path for cataloging, handoff, and service-side inventory tracking.',
      availabilityNote: 'Public link pending',
      preview: {
        kind: 'placeholder',
        label: 'DVD Valet screen recording coming soon',
      },
    },
  ],
};

export const PLATFORMS: ShowcasePlatform[] = [ROUTEMASTER_PLATFORM, VALET_BALLET_PLATFORM];
