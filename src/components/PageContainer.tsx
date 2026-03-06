import { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f8fb',
  },
  content: {
    padding: 16,
    gap: 16,
    paddingBottom: 24,
  },
});
