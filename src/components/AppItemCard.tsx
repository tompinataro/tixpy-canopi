import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { AppBadge, AppLink, AppActionType } from '@/src/config/portfolio';
import { THEME } from '@/src/config/theme';
import { openExternalLink } from '@/src/utils/openExternalLink';

type AppItemCardProps = {
  variant?: 'routemaster' | 'valetballet';
  title: string;
  description: string;
  badge: AppBadge;
  icon?: any;
  links?: AppLink[];
  availabilityNote?: string;
  size?: 'compact' | 'full';
};

export function AppItemCard({
  variant,
  title,
  badge,
  icon,
  links,
  size = 'full',
}: AppItemCardProps) {
  const isCompact = size === 'compact';
  const resolvedLinks: AppLink[] = links?.length ? links : [];
  const titleStyle = [styles.title, isCompact && styles.compactTitle];
  const actionLabelStyle = [styles.actionLabel, isCompact && styles.compactActionLabel];
  const familyTone = variant ? CARD_TONES[variant] : null;

  const handlePress = (link: AppLink) => {
    if (!link.url) {
      return;
    }
    void openExternalLink(link.url, `${title} (${link.type})`);
  };

  const renderActionContents = (type: AppActionType, disabled: boolean) => {
    if (type === 'appStore') {
      return (
        <Text style={[actionLabelStyle, disabled && styles.actionLabelDisabled]}>
          App Store
        </Text>
      );
    }

    if (type === 'googlePlay') {
      return (
        <Text style={[actionLabelStyle, disabled && styles.actionLabelDisabled]}>
          Google Play
        </Text>
      );
    }

    if (type === 'macos') {
      return (
        <Text style={[actionLabelStyle, disabled && styles.actionLabelDisabled]}>
          macOS
        </Text>
      );
    }

    return (
      <Text style={[actionLabelStyle, disabled && styles.actionLabelDisabled]}>
        Demo
      </Text>
    );
  };

  return (
    <View
      style={[
        styles.card,
        isCompact && styles.compactCard,
        familyTone?.card,
      ]}
    >
      <View style={styles.headerRow}>
        <View style={styles.titleWithIcon}>
          {icon ? (
            <View style={[styles.appIcon, familyTone?.appIcon]}>
              <Image
                source={icon}
                style={styles.appIconImage}
                resizeMode="contain"
                accessibilityLabel={`${title} icon`}
              />
            </View>
          ) : (
            <View style={[styles.appIcon, familyTone?.appIcon]}>
              <Text style={styles.appIconText}>
                {title
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0]!.toUpperCase())
                  .join('')}
              </Text>
            </View>
          )}
          <Text style={titleStyle}>{title}</Text>
        </View>

        <View style={styles.actionsRow}>
          {resolvedLinks.map((link) => {
            const disabled = !link.url;
            return (
              <Pressable
                key={`${title}-${link.type}`}
                onPress={() => handlePress(link)}
                disabled={disabled}
                accessibilityRole="button"
                accessibilityLabel={`${title} ${link.type}`}
                style={({ pressed }) => [
                  styles.actionButton,
                  badge === 'live' ? styles.actionButtonLive : styles.actionButtonDemo,
                  disabled && styles.actionButtonDisabled,
                  pressed && !disabled && styles.actionButtonPressed,
                ]}
              >
                {renderActionContents(link.type, disabled)}
              </Pressable>
            );
          })}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.card,
    borderRadius: THEME.radius.md,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    padding: 12,
    gap: 8,
    ...THEME.shadow.soft,
  },
  compactCard: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    minWidth: 0,
  },
  appIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconImage: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  appIconText: {
    color: THEME.colors.muted,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: THEME.colors.text,
  },
  compactTitle: {
    fontSize: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 5,
    flexShrink: 0,
  },
  actionButton: {
    minHeight: 32,
    borderRadius: THEME.radius.pill,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexShrink: 0,
  },
  actionButtonLive: {
    backgroundColor: 'rgba(34,197,94,0.12)',
    borderColor: 'rgba(34,197,94,0.35)',
  },
  actionButtonDemo: {
    backgroundColor: 'rgba(245,158,11,0.10)',
    borderColor: 'rgba(245,158,11,0.28)',
  },
  actionButtonDisabled: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderColor: THEME.colors.cardBorder,
  },
  actionButtonPressed: {
    opacity: 0.86,
  },
  actionLabel: {
    color: THEME.colors.text,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.1,
  },
  compactActionLabel: {
    fontSize: 11,
  },
  actionLabelDisabled: {
    color: THEME.colors.muted,
  },
});

const CARD_TONES = {
  routemaster: StyleSheet.create({
    card: {
      backgroundColor: 'rgba(18, 49, 66, 0.32)',
      borderColor: 'rgba(34, 211, 238, 0.22)',
    },
    appIcon: {
      backgroundColor: 'rgba(34, 211, 238, 0.10)',
      borderColor: 'rgba(34, 211, 238, 0.24)',
    },
  }),
  valetballet: StyleSheet.create({
    card: {
      backgroundColor: 'rgba(46, 23, 68, 0.32)',
      borderColor: 'rgba(168, 85, 247, 0.22)',
    },
    appIcon: {
      backgroundColor: 'rgba(168, 85, 247, 0.10)',
      borderColor: 'rgba(168, 85, 247, 0.24)',
    },
  }),
} as const;
