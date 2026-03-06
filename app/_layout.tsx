import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTintColor: '#102a43',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#f4f8fb' },
      }}>
      <Stack.Screen name="index" options={{ title: 'Tixpy Canopi' }} />
      <Stack.Screen name="routemaster" options={{ title: 'RouteMaster' }} />
      <Stack.Screen name="valetballet" options={{ title: 'Valet Ballet' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
    </Stack>
  );
}
