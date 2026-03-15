import { Platform, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { THEME } from '@/src/config/theme';

import { AppItemCard } from '@/src/components/AppItemCard';
import { PageContainer } from '@/src/components/PageContainer';
import { PlatformCard } from '@/src/components/PlatformCard';
import { PLATFORMS } from '@/src/config/portfolio';

const deviceLabel = Platform.OS === 'ios' ? 'iOS' : Platform.OS === 'android' ? 'Android' : 'Web';

export default function HomeScreen() {
  return (
    <PageContainer>
      <View style={styles.hero}>
        <LinearGradient
          colors={[`${THEME.colors.accentA}66`, `${THEME.colors.accentB}33`, 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGlow}
        />

        <Text style={styles.kicker}>Tixpy</Text>
        <Text style={styles.title}>Canopi</Text>
        <Text style={styles.subtitle}>A glossy portfolio container for the Tixpy app suite.</Text>

        <View style={styles.deviceHint}>
          <Text style={styles.deviceHintText}>Viewing on {deviceLabel}</Text>
        </View>
      </View>

      {PLATFORMS.map((platform) => (
        <PlatformCard
          key={platform.slug}
          title={platform.title}
          subtitle={platform.description}
          iconName={platform.iconName}
          href={platform.href}>
          {platform.apps.map((app) => (
            <AppItemCard
              key={app.name}
              title={app.name}
              description={app.description}
              badge={app.badge}
              storeType={app.storeType}
              url={app.url}
              size="compact"
            />
          ))}
        </PlatformCard>
      ))}
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    marginBottom: 10,
    gap: 8,
    padding: 16,
    borderRadius: THEME.radius.lg,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    backgroundColor: THEME.colors.card,
    overflow: 'hidden',
    ...THEME.shadow.soft,
  },
  heroGlow: {
    position: 'absolute',
    top: -40,
    left: -40,
    right: -40,
    height: 160,
  },
  kicker: {
    color: THEME.colors.muted,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2.4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: THEME.colors.text,
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: THEME.colors.subtext,
  },
  deviceHint: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: THEME.radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
  },
  deviceHintText: {
    color: THEME.colors.muted,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
