import { Platform, StyleSheet, Text, View } from 'react-native';

import { AppItemCard } from '@/src/components/AppItemCard';
import { PageContainer } from '@/src/components/PageContainer';
import { PlatformCard } from '@/src/components/PlatformCard';
import { PLATFORMS } from '@/src/config/portfolio';

const deviceLabel = Platform.OS === 'ios' ? 'iOS' : Platform.OS === 'android' ? 'Android' : 'Web';

export default function HomeScreen() {
  return (
    <PageContainer>
      <View style={styles.hero}>
        <Text style={styles.title}>Tixpy Canopi</Text>
        <Text style={styles.subtitle}>Portfolio Container</Text>
        <View style={styles.deviceHint}>
          <Text style={styles.deviceHintText}>Device: {deviceLabel}</Text>
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
    marginBottom: 12,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#102a43',
  },
  subtitle: {
    fontSize: 16,
    color: '#486581',
  },
  deviceHint: {
    alignSelf: 'flex-start',
    backgroundColor: '#d9e2ec',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  deviceHintText: {
    color: '#334e68',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
