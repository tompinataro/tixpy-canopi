import { Image, StyleSheet, Text, View } from 'react-native';
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
          <View style={styles.heroLogo} accessible accessibilityLabel="Tixpy Canopi logo">
            <Image
              source={require('../assets/tixpy-canopi-canopy-only.png')}
              style={styles.heroLogoImage}
              resizeMode="contain"
            />
            <View style={styles.heroLogoTextWrap}>
              <Text style={styles.heroLogoLineOne}>Tixpy</Text>
              <Text style={styles.heroLogoLineTwo}>Canopi</Text>
            </View>
          </View>
          <View style={styles.titleCopy}>
            <Text style={styles.title}>Tixpy Canopi</Text>
            <Text style={styles.subtitle}>. . . a showcase of custom apps by Tom Pinataro</Text>
          </View>
        </View>
      </View>

      {PLATFORMS.map((platform) => (
        <PlatformCard
          key={platform.slug}
          variant={platform.slug}
          title={platform.title}
          subtitle={platform.description}
>
          {platform.apps.map((app) => (
            <AppItemCard
              key={app.name}
              variant={platform.slug}
              title={app.name}
              description={app.description}
              badge={app.badge}
              icon={app.icon}
              links={app.links}
              availabilityNote={app.availabilityNote}
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
    marginBottom: 2,
    gap: 6,
    padding: 14,
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
    alignItems: 'center',
    gap: 12,
  },
  heroLogo: {
    width: 72,
    height: 54,
    flexShrink: 0,
    position: 'relative',
    borderRadius: 18,
    backgroundColor: '#f2e8dc',
    borderWidth: 1,
    borderColor: 'rgba(143,28,60,0.10)',
    overflow: 'hidden',
  },
  heroLogoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  heroLogoTextWrap: {
    position: 'absolute',
    top: 14,
    bottom: 4,
    left: 14,
    right: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroLogoLineOne: {
    fontSize: 11,
    lineHeight: 11,
    color: '#8f1c3c',
    fontFamily: 'Monotype Corsiva, Apple Chancery, Snell Roundhand, cursive',
  },
  heroLogoLineTwo: {
    marginTop: 0,
    fontSize: 14,
    lineHeight: 14,
    color: '#8f1c3c',
    fontFamily: 'Monotype Corsiva, Apple Chancery, Snell Roundhand, cursive',
  },
  titleCopy: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  title: {
    fontSize: 33,
    fontWeight: '900',
    color: THEME.colors.text,
    letterSpacing: -0.6,
    flexShrink: 0,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: THEME.colors.subtext,
    fontWeight: '600',
    flexShrink: 1,
  },
});
