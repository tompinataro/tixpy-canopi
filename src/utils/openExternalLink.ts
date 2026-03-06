import { Alert, Linking } from 'react-native';

export async function openExternalLink(url: string, label: string) {
  try {
    const supported = await Linking.canOpenURL(url);
    if (!supported) {
      throw new Error('Unsupported URL');
    }
    await Linking.openURL(url);
  } catch {
    Alert.alert('Unable to open link', `We could not open ${label} right now. Please try again in a moment.`);
  }
}
