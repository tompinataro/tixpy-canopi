import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { THEME } from '@/src/config/theme';

import { AppItemCard } from '@/src/components/AppItemCard';
import { PageContainer } from '@/src/components/PageContainer';
import { PlatformCard } from '@/src/components/PlatformCard';
import { PLATFORMS } from '@/src/config/portfolio';

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

        <View style={styles.titleLine}>
          <Text style={styles.title}>Tixpy Canopi</Text>
          <Text style={styles.subtitle}>. . . a showcase for custom applications</Text>
        </View>
      </View>

      {PLATFORMS.map((platform) => (
        <PlatformCard
          key={platform.slug}
          title={platform.title}
          subtitle={platform.description}
          iconName={platform.iconName}
>
          {platform.apps.map((app) => (
            <AppItemCard
              key={app.name}
              title={app.name}
              description={app.description}
              badge={app.badge}
              icon={app.icon}
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
  // kicker removed
  titleLine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    gap: 10,
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
    fontWeight: '600',
  },
});
