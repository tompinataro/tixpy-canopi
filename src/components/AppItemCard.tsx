import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { AppBadge, AppLink, AppActionType } from '@/src/config/portfolio';
import { THEME } from '@/src/config/theme';
import { openExternalLink } from '@/src/utils/openExternalLink';

type AppItemCardProps = {
  title: string;
  description: string;
  badge: AppBadge;
  icon?: any;
  links?: AppLink[];
  availabilityNote?: string;
  size?: 'compact' | 'full';
};

export function AppItemCard({
  title,
  description,
  badge,
  icon,
  links,
  availabilityNote,
  size = 'full',
}: AppItemCardProps) {
  const isCompact = size === 'compact';
  const resolvedLinks: AppLink[] = links?.length ? links : [];

  const handlePress = (link: AppLink) => {
    if (!link.url) {
      return;
    }
    void openExternalLink(link.url, `${title} (${link.type})`);
  };

  const renderActionContents = (type: AppActionType, disabled: boolean) => {
    const tintColor = disabled ? THEME.colors.muted : THEME.colors.text;

    if (type === 'appStore') {
      return <Ionicons name="logo-apple" size={20} color={tintColor} />;
    }

    if (type === 'googlePlay') {
      return <FontAwesome5 name="google-play" size={16} color={tintColor} />;
    }

    if (type === 'macos') {
      return (
        <Text style={[styles.actionLabel, disabled && styles.actionLabelDisabled]}>
          macOS
        </Text>
      );
    }

    return (
      <Text style={[styles.actionLabel, disabled && styles.actionLabelDisabled]}>
        Demo
      </Text>
    );
  };

  return (
    <View style={[styles.card, isCompact && styles.compactCard]}>
      <View style={styles.titleWithIcon}>
        {icon ? (
          <View style={styles.appIcon}>
            <Image
              source={icon}
              style={styles.appIconImage}
              resizeMode="contain"
              accessibilityLabel={`${title} icon`}
            />
          </View>
        ) : (
          <View style={styles.appIcon}>
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
        <Text style={styles.title}>{title}</Text>
      </View>

      {!isCompact && <Text style={styles.description}>{description}</Text>}

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

      {availabilityNote ? (
        <Text style={styles.availabilityNote}>{availabilityNote}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.card,
    borderRadius: THEME.radius.md,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    padding: 14,
    gap: 10,
    ...THEME.shadow.soft,
  },
  compactCard: {
    padding: 12,
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
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: THEME.colors.subtext,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  actionButton: {
    flex: 1,
    minHeight: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
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
    fontSize: 14,
    fontWeight: '700',
  },
  actionLabelDisabled: {
    color: THEME.colors.muted,
  },
  availabilityNote: {
    fontSize: 12,
    lineHeight: 18,
    color: THEME.colors.muted,
  },
});
