import { StyleSheet, Text, View } from 'react-native';

import { PageContainer } from '@/src/components/PageContainer';

export default function AboutScreen() {
  return (
    <PageContainer>
      <View style={styles.card}>
        <Text style={styles.title}>About Tixpy Canopi</Text>
        <Text style={styles.body}>
          Tixpy Canopi is a lightweight portfolio container app that surfaces live store builds and demo links
          for Tixpy platforms in one place.
        </Text>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e4e7eb',
    padding: 16,
    shadowColor: '#102a43',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#102a43',
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    color: '#486581',
    lineHeight: 22,
  },
});
