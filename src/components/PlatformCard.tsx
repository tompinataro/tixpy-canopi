import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THEME } from '@/src/config/theme';

type PlatformCardProps = {
  title: string;
  subtitle: string;
  // href removed
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  children: ReactNode;
};

export function PlatformCard({ title, subtitle, iconName, children }: PlatformCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headingRow}>
        <View style={styles.titleRow}>
          <MaterialCommunityIcons name={iconName} size={20} color={THEME.colors.accentB} />
          {/* title moved below for single-line title+subtitle */}
        </View>
      </View>

      <View style={styles.titleLine}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.items}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.card,
    borderRadius: THEME.radius.lg,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    padding: 14,
    gap: 12,
    ...THEME.shadow.soft,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleLine: {
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
  items: {
    gap: 10,
  },
  // open button styles removed
});
