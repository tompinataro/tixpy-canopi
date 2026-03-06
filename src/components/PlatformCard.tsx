import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
          <MaterialCommunityIcons name={iconName} size={20} color="#0f609b" />
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
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#d9e2ec',
    padding: 14,
    gap: 12,
    shadowColor: '#102a43',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 2,
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
    fontWeight: '800',
    color: '#102a43',
  },
  subtitle: {
    fontSize: 14,
    color: '#627d98',
    lineHeight: 20,
  },
  items: {
    gap: 10,
  },
  openButton: {
    backgroundColor: '#eef5fb',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  openButtonPressed: {
    opacity: 0.8,
  },
  openButtonText: {
    color: '#0f609b',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
});
