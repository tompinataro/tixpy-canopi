import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { AppBadge, StoreType } from '@/src/config/portfolio';
import { openExternalLink } from '@/src/utils/openExternalLink';
import { PrimaryButton } from '@/src/components/PrimaryButton';
import { SecondaryButton } from '@/src/components/SecondaryButton';

type AppItemCardProps = {
  title: string;
  description: string;
  badge: AppBadge;
  storeType: StoreType;
  url: string;
  size?: 'compact' | 'full';
};

const STORE_ICON_MAP: Record<StoreType, keyof typeof MaterialCommunityIcons.glyphMap> = {
  'App Store': 'apple',
  'Google Play': 'google-play',
  TestFlight: 'airplane',
};

export function AppItemCard({ title, description, badge, storeType, url, size = 'full' }: AppItemCardProps) {
  const isLive = badge === 'live';
  const isCompact = size === 'compact';

  const handlePress = () => {
    void openExternalLink(url, `${title} (${storeType})`);
  };

  return (
    <View style={[styles.card, isCompact && styles.compactCard]}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, isLive ? styles.liveBadge : styles.demoBadge]}>
          <Text style={[styles.badgeText, isLive ? styles.liveBadgeText : styles.demoBadgeText]}>{badge}</Text>
        </View>
      </View>

      {!isCompact && <Text style={styles.description}>{description}</Text>}

      <View style={styles.storeRow}>
        <MaterialCommunityIcons name={STORE_ICON_MAP[storeType]} size={16} color="#486581" />
        <Text style={styles.storeType}>{storeType}</Text>
      </View>

      {isLive ? <PrimaryButton label={storeType} onPress={handlePress} /> : <SecondaryButton label={storeType} onPress={handlePress} />}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e4e7eb',
    padding: 14,
    gap: 10,
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
    fontWeight: '700',
    color: '#102a43',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#486581',
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  liveBadge: {
    backgroundColor: '#e3f9e5',
  },
  demoBadge: {
    backgroundColor: '#fff3c4',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  liveBadgeText: {
    color: '#207227',
  },
  demoBadgeText: {
    color: '#8d2b0b',
  },
  storeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  storeType: {
    fontSize: 13,
    fontWeight: '600',
    color: '#486581',
  },
});
