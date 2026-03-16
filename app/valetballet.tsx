import { StyleSheet, Text } from 'react-native';

import { AppItemCard } from '@/src/components/AppItemCard';
import { PageContainer } from '@/src/components/PageContainer';
import { VALET_BALLET_PLATFORM } from '@/src/config/portfolio';

export default function ValetBalletScreen() {
  return (
    <PageContainer>
      <Text style={styles.title}>{VALET_BALLET_PLATFORM.title}</Text>
      <Text style={styles.subtitle}>{VALET_BALLET_PLATFORM.description}</Text>
      {VALET_BALLET_PLATFORM.apps.map((app) => (
        <AppItemCard
          key={app.name}
          title={app.name}
          description={app.description}
          badge={app.badge}
          storeType={app.storeType}
          url={app.url}
          size="full"
        />
      ))}
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#102a43',
  },
  subtitle: {
    fontSize: 16,
    color: '#486581',
    marginBottom: 16,
  },
});
