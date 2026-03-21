import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: 'Tixpy-Canopi',
        // The Canopi web UI includes its own title/hero; hide the native header to avoid redundancy.
        headerShown: false,
        contentStyle: { backgroundColor: '#f4f8fb' },
      }}
    />
  );
}
