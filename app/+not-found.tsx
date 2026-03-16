import { Link, Stack } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen does not exist.</Text>
        {Platform.OS === 'web' ? (
          <a href="./" style={styles.link}>
            Return to Home
          </a>
        ) : (
          <Link href="/" style={styles.link}>
            Return to Home
          </Link>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f8fb',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#102a43',
    marginBottom: 12,
  },
  link: {
    color: '#0f609b',
    fontSize: 16,
    fontWeight: '700',
  },
});
