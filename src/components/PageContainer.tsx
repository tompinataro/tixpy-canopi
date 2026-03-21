import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { THEME } from '@/src/config/theme';

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={[THEME.colors.bg0, THEME.colors.bg1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>{children}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: THEME.colors.bg0,
  },
  content: {
    padding: 16,
    paddingBottom: 28,
    flexGrow: 1,
  },
  inner: {
    width: '100%',
    maxWidth: 860,
    alignSelf: 'center',
    gap: 12,
  },
});
