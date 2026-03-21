import { ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { THEME } from '@/src/config/theme';

type PlatformCardProps = {
  variant: 'routemaster' | 'valetballet';
  title: string;
  subtitle: string;
  children: ReactNode;
};

const VARIANT_STYLES = {
  routemaster: {
    card: {
      backgroundColor: 'rgba(24, 67, 91, 0.26)',
      borderColor: 'rgba(34, 211, 238, 0.22)',
    },
    titleBand: {
      backgroundColor: 'rgba(34, 211, 238, 0.12)',
      borderColor: 'rgba(34, 211, 238, 0.28)',
    },
    itemsShell: {
      backgroundColor: 'rgba(7, 27, 38, 0.30)',
      borderColor: 'rgba(34, 211, 238, 0.16)',
    },
  },
  valetballet: {
    card: {
      backgroundColor: 'rgba(66, 34, 96, 0.26)',
      borderColor: 'rgba(168, 85, 247, 0.24)',
    },
    titleBand: {
      backgroundColor: 'rgba(168, 85, 247, 0.12)',
      borderColor: 'rgba(168, 85, 247, 0.30)',
    },
    itemsShell: {
      backgroundColor: 'rgba(30, 15, 46, 0.30)',
      borderColor: 'rgba(168, 85, 247, 0.16)',
    },
  },
} as const;

const TITLE_ICONS = {
  routemaster: {
    source: require('../../assets/app-icons/routemaster.png'),
    accessibilityLabel: 'RouteMaster icon',
  },
  valetballet: {
    source: require('../../assets/app-icons/valetballet.png'),
    accessibilityLabel: 'Valet Ballet icon',
  },
} as const;

export function PlatformCard({ variant, title, subtitle, children }: PlatformCardProps) {
  const palette = VARIANT_STYLES[variant];
  const titleIcon = TITLE_ICONS[variant];

  return (
    <View style={[styles.card, palette.card]}>
      <View style={[styles.titleBand, palette.titleBand]}>
        <View style={styles.titleIconFrame}>
          <Image
            source={titleIcon.source}
            style={styles.titleIcon}
            resizeMode="cover"
            accessibilityLabel={titleIcon.accessibilityLabel}
          />
        </View>
        <View style={styles.titleCopy}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={[styles.itemsShell, palette.itemsShell]}>
        <View style={styles.items}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: THEME.radius.lg,
    borderWidth: 1,
    padding: 12,
    gap: 10,
    ...THEME.shadow.soft,
  },
  titleBand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
  },
  titleIconFrame: {
    width: 44,
    height: 44,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    flexShrink: 0,
  },
  titleIcon: {
    width: '100%',
    height: '100%',
  },
  titleCopy: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: THEME.colors.text,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 14,
    color: THEME.colors.subtext,
    lineHeight: 20,
    fontWeight: '600',
  },
  itemsShell: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 8,
  },
  items: {
    gap: 8,
  },
  // open button styles removed
});
