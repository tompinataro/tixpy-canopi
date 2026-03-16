import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

import { AppBadge, AppLink, StoreType } from '@/src/config/portfolio';
import { THEME } from '@/src/config/theme';
import { openExternalLink } from '@/src/utils/openExternalLink';
import { PrimaryButton } from '@/src/components/PrimaryButton';
import { SecondaryButton } from '@/src/components/SecondaryButton';

type AppItemCardProps = {
  title: string;
  description: string;
  badge: AppBadge;
  icon?: any;
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

export function AppItemCard({ title, description, badge, icon, storeType, url, links, size = 'full' }: AppItemCardProps) {
  const isCompact = size === 'compact';

  const resolvedLinks: AppLink[] = links?.length ? links : [{ storeType, url }];

  const handlePress = (link: AppLink) => {
    void openExternalLink(link.url, `${title} (${link.storeType})`);
  };

  return (
    <View style={[styles.card, isCompact && styles.compactCard]}>
      <View style={styles.headerRow}>
        <View style={styles.titleWithIcon}>
          {icon ? (
            <Image source={icon} style={styles.appIconImage} accessibilityLabel={`${title} icon`} />
          ) : (
            <View style={styles.appIcon}>
              <Text style={styles.appIconText}>
                {title
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0]!.toUpperCase())
                  .join('')}
              </Text>
            </View>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      {!isCompact && <Text style={styles.description}>{description}</Text>}

      {/* store label row removed */}

      <View style={styles.actionsRow}>
        {resolvedLinks.map((link) => {
          const Button = badge === 'live' ? PrimaryButton : SecondaryButton;
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
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  appIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  appIconText: {
    color: THEME.colors.muted,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.4,
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
  // live/demo pills removed
  // store label styles removed
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
