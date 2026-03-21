import { Alert, Linking, Platform } from 'react-native';
import type { GestureResponderEvent } from 'react-native';

function consumeWebPressEvent(event?: GestureResponderEvent) {
  if (!event || Platform.OS !== 'web') {
    return;
  }

  event.preventDefault?.();
  event.stopPropagation?.();

  const nativeEvent = event.nativeEvent as unknown as
    | {
        preventDefault?: () => void;
        stopPropagation?: () => void;
      }
    | undefined;
  nativeEvent?.preventDefault?.();
  nativeEvent?.stopPropagation?.();
}

export async function openExternalLink(url: string, label: string, event?: GestureResponderEvent) {
  try {
    // On web, Linking.canOpenURL can be overly strict depending on environment.
    // Prefer a direct new-tab open from the user gesture.
    if (Platform.OS === 'web') {
      consumeWebPressEvent(event);

      const anchor = globalThis.document?.createElement?.('a');
      if (anchor) {
        anchor.href = url;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.click();
        return;
      }

      globalThis?.open?.(url, '_blank', 'noopener,noreferrer');
      return;
    }

    await Linking.openURL(url);
  } catch {
    Alert.alert('Unable to open link', `We could not open ${label} right now. Please try again in a moment.`);
  }
}
