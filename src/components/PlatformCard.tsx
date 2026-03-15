import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { THEME } from '@/src/config/theme';

type PlatformCardProps = {
  title: string;
  subtitle: string;
  href: Href;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  children: ReactNode;
};

export function PlatformCard({ title, subtitle, href, iconName, children }: PlatformCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headingRow}>
        <View style={styles.titleRow}>
          <MaterialCommunityIcons name={iconName} size={20} color={THEME.colors.accentB} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Link href={href} asChild>
          <Pressable style={({ pressed }) => [styles.openButton, pressed && styles.openButtonPressed]}>
            <Text style={styles.openButtonText}>Open</Text>
          </Pressable>
        </Link>
      </View>

      <Text style={styles.subtitle}>{subtitle}</Text>
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
  },
  items: {
    gap: 10,
  },
  openButton: {
    backgroundColor: 'rgba(124,58,237,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.35)',
    borderRadius: THEME.radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  openButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  openButtonText: {
    color: THEME.colors.text,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
});
