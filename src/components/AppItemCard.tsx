import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { AppBadge, AppLink, StoreType } from '@/src/config/portfolio';
import { THEME } from '@/src/config/theme';
import { openExternalLink } from '@/src/utils/openExternalLink';
import { PrimaryButton } from '@/src/components/PrimaryButton';
import { SecondaryButton } from '@/src/components/SecondaryButton';

type AppItemCardProps = {
  title: string;
  description: string;
  badge: AppBadge;
  /** Primary link (Phase 1) */
  storeType: StoreType;
  url: string;
  /** Optional additional links (Phase 2) */
  links?: AppLink[];
  size?: 'compact' | 'full';
};

const STORE_ICON_MAP: Record<StoreType, keyof typeof MaterialCommunityIcons.glyphMap> = {
  'App Store': 'apple',
  'Google Play': 'google-play',
  TestFlight: 'airplane',
};

export function AppItemCard({ title, description, badge, storeType, url, links, size = 'full' }: AppItemCardProps) {
  const isLive = badge === 'live';
  const isCompact = size === 'compact';

  const resolvedLinks: AppLink[] = links?.length ? links : [{ storeType, url }];

  const handlePress = (link: AppLink) => {
    void openExternalLink(link.url, `${title} (${link.storeType})`);
  };

  return (
    <View style={[styles.card, isCompact && styles.compactCard]}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, isLive ? styles.liveBadge : styles.demoBadge]}>
          <Text style={[styles.badgeText, isLive ? styles.liveBadgeText : styles.demoBadgeText]}>
            {isLive ? 'live' : 'demo'}
          </Text>
        </View>
      </View>

      {!isCompact && <Text style={styles.description}>{description}</Text>}

      <View style={styles.storeRow}>
        <MaterialCommunityIcons name={STORE_ICON_MAP[storeType]} size={16} color={THEME.colors.muted} />
        <Text style={styles.storeType}>{resolvedLinks.length > 1 ? 'Stores' : storeType}</Text>
      </View>

      <View style={styles.actionsRow}>
        {resolvedLinks.map((link) => {
          const Button = isLive ? PrimaryButton : SecondaryButton;
          return (
            <View key={`${title}-${link.storeType}`} style={styles.actionItem}>
              <Button label={link.storeType} onPress={() => handlePress(link)} />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.card,
    borderRadius: THEME.radius.md,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    padding: 14,
    gap: 10,
    ...THEME.shadow.soft,
  },
  compactCard: {
    padding: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: THEME.colors.text,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: THEME.colors.subtext,
  },
  badge: {
    borderRadius: THEME.radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
  },
  liveBadge: {
    backgroundColor: 'rgba(34,197,94,0.12)',
    borderColor: 'rgba(34,197,94,0.35)',
  },
  demoBadge: {
    backgroundColor: 'rgba(245,158,11,0.12)',
    borderColor: 'rgba(245,158,11,0.35)',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0.9,
  },
  liveBadgeText: {
    color: THEME.colors.live,
  },
  demoBadgeText: {
    color: THEME.colors.demo,
  },
  storeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  storeType: {
    fontSize: 13,
    fontWeight: '700',
    color: THEME.colors.muted,
    letterSpacing: 0.2,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  actionItem: {
    flexGrow: 1,
    minWidth: 140,
  },
});
