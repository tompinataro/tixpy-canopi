import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { PageContainer } from '@/src/components/PageContainer';
import { ShowcaseGalleryCard } from '@/src/components/ShowcaseGalleryCard';
import { PLATFORMS } from '@/src/config/portfolio';
import { THEME } from '@/src/config/theme';

const PLATFORM_LOOKUP = {
  routemaster: {
    eyebrow: 'Field Workflow Suite',
    intro: 'Custom mobile dashboards for crews that need to move through route work with less friction and clearer completion.',
    accent: {
      panelStart: '#0f766e',
      panelEnd: '#164e63',
      chip: 'rgba(15, 118, 110, 0.9)',
    },
  },
  valetballet: {
    eyebrow: 'Service Inventory Suite',
    intro: 'Desktop and mobile concepts for tracking goods, handoffs, and operator accountability with cleaner day-to-day flows.',
    accent: {
      panelStart: '#1d4ed8',
      panelEnd: '#312e81',
      chip: 'rgba(37, 99, 235, 0.88)',
    },
  },
} as const;

export default function HomeScreen() {
  return (
    <PageContainer>
      <View style={styles.hero}>
        <LinearGradient
          colors={['rgba(124, 58, 237, 0.38)', 'rgba(6, 182, 212, 0.2)', 'rgba(5, 7, 13, 0)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGlow}
        />

        <View style={styles.heroTop}>
          <Text style={styles.kicker}>Custom Application Gallery</Text>
          <Text style={styles.title}>Tixpy Canopi</Text>
          <Text style={styles.subtitle}>. . . a showcase for custom applications by Tom Pinataro</Text>
          <Text style={styles.heroBody}>
            Built to feel more like a product reel than a directory. Each app gets space to show its role,
            its current release state, and where a quick demo belongs.
          </Text>
        </View>

        <View style={styles.metricsRow}>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>4</Text>
            <Text style={styles.metricLabel}>Apps</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>2</Text>
            <Text style={styles.metricLabel}>Platform Families</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>1</Text>
            <Text style={styles.metricLabel}>Demo Ready</Text>
          </View>
        </View>
      </View>

      {PLATFORMS.map((platform) => {
        const look = PLATFORM_LOOKUP[platform.slug];

        return (
          <View key={platform.slug} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionEyebrow}>{look.eyebrow}</Text>
              <Text style={styles.sectionTitle}>{platform.title}</Text>
              <Text style={styles.sectionIntro}>{look.intro}</Text>
              <Text style={styles.sectionDescription}>{platform.description}</Text>
            </View>

            <View style={styles.galleryStack}>
              {platform.apps.map((app) => (
                <ShowcaseGalleryCard
                  key={app.name}
                  app={app}
                  platform={platform}
                  accent={look.accent}
                />
              ))}
            </View>
          </View>
        );
      })}
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    marginBottom: 8,
    borderRadius: 28,
    overflow: 'hidden',
    padding: 22,
    gap: 18,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    backgroundColor: 'rgba(255,255,255,0.06)',
    ...THEME.shadow.soft,
  },
  heroGlow: {
    position: 'absolute',
    top: -80,
    left: -50,
    right: -50,
    height: 240,
  },
  heroTop: {
    gap: 10,
  },
  kicker: {
    color: 'rgba(210, 214, 255, 0.78)',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 48,
    lineHeight: 52,
    fontWeight: '900',
    color: THEME.colors.text,
    letterSpacing: -0.9,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    color: 'rgba(245,247,255,0.8)',
    fontWeight: '700',
  },
  heroBody: {
    maxWidth: 640,
    fontSize: 15,
    lineHeight: 23,
    color: THEME.colors.subtext,
    fontWeight: '500',
  },
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    minWidth: 116,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(7, 12, 24, 0.44)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    gap: 4,
  },
  metricValue: {
    color: THEME.colors.text,
    fontSize: 26,
    fontWeight: '900',
  },
  metricLabel: {
    color: THEME.colors.subtext,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  section: {
    gap: 16,
    paddingTop: 8,
  },
  sectionHeader: {
    gap: 6,
  },
  sectionEyebrow: {
    color: THEME.colors.accentB,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    color: THEME.colors.text,
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '900',
    letterSpacing: -0.6,
  },
  sectionIntro: {
    color: THEME.colors.text,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '700',
    maxWidth: 760,
  },
  sectionDescription: {
    color: THEME.colors.subtext,
    fontSize: 14,
    lineHeight: 21,
    maxWidth: 760,
  },
  galleryStack: {
    gap: 18,
  },
});
