import { useState } from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import { LinearGradient } from 'expo-linear-gradient';

import { AppLink, ShowcaseApp, ShowcasePlatform } from '@/src/config/portfolio';
import { THEME } from '@/src/config/theme';
import { openExternalLink } from '@/src/utils/openExternalLink';
import { PrimaryButton } from '@/src/components/PrimaryButton';
import { SecondaryButton } from '@/src/components/SecondaryButton';

type ShowcaseGalleryCardProps = {
  app: ShowcaseApp;
  platform: ShowcasePlatform;
  accent: {
    panelStart: string;
    panelEnd: string;
    chip: string;
  };
};

export function ShowcaseGalleryCard({ app, platform, accent }: ShowcaseGalleryCardProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const resolvedLinks: AppLink[] = app.links?.length
    ? app.links
    : app.storeType && app.url
      ? [{ storeType: app.storeType, url: app.url }]
      : [];

  const videoUri =
    app.preview?.kind === 'video'
      ? Asset.fromModule(app.preview.source).uri
      : null;

  const handlePress = (link: AppLink) => {
    void openExternalLink(link.url, `${app.name} (${link.storeType})`);
  };

  const renderPreview = () => {
    if (app.preview?.kind === 'video' && videoUri && Platform.OS === 'web' && isDemoOpen) {
      return (
        <video
          aria-label={app.preview.label}
          controls
          playsInline
          preload="metadata"
          style={videoStyles.player}
          src={videoUri}
        />
      );
    }

    const previewLabel =
      app.preview?.kind === 'video'
        ? 'Quick demo'
        : 'Demo slot';

    const previewHeadline =
      app.preview?.kind === 'video'
        ? 'Watch a short walkthrough'
        : 'Screen recording ready to add';

    const previewBody =
      app.preview?.kind === 'video'
        ? 'Open an inline recording without leaving the gallery.'
        : app.preview?.label ?? 'Drop in a recording and this card can preview it right here.';

    return (
      <View style={styles.previewFallback}>
        <View style={styles.previewTopRow}>
          <View style={[styles.previewChip, { backgroundColor: accent.chip }]}>
            <Text style={styles.previewChipText}>{previewLabel}</Text>
          </View>
          <Text style={styles.previewPlatform}>{platform.title}</Text>
        </View>

        <View style={styles.previewIconWrap}>
          <Image
            source={app.icon}
            style={styles.previewIcon}
            resizeMode="contain"
            accessibilityLabel={`${app.name} preview icon`}
          />
        </View>

        <Text style={styles.previewHeadline}>{previewHeadline}</Text>
        <Text style={styles.previewBody}>{previewBody}</Text>

        {app.preview?.kind === 'video' && Platform.OS === 'web' ? (
          <Pressable onPress={() => setIsDemoOpen(true)} style={styles.playButton}>
            <Text style={styles.playButtonText}>Play Demo</Text>
          </Pressable>
        ) : (
          <View style={styles.comingSoonPill}>
            <Text style={styles.comingSoonText}>Recording Pending</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.mediaShell}>
        <LinearGradient
          colors={[accent.panelStart, accent.panelEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        {renderPreview()}
      </View>

      <View style={styles.body}>
        <View style={styles.labelRow}>
          <View style={[styles.statePill, { backgroundColor: accent.chip }]}>
            <Text style={styles.statePillText}>{app.badge === 'live' ? 'Public App' : 'Preview Build'}</Text>
          </View>
          <Text style={styles.platformTag}>{platform.title}</Text>
        </View>

        <View style={styles.titleRow}>
          <View style={styles.inlineIconWrap}>
            <Image source={app.icon} style={styles.inlineIcon} resizeMode="contain" accessibilityLabel={`${app.name} icon`} />
          </View>
          <Text style={styles.title}>{app.name}</Text>
        </View>

        <Text style={styles.summary}>{app.showcaseSummary}</Text>
        <Text style={styles.description}>{app.description}</Text>

        <View style={styles.actionsRow}>
          {resolvedLinks.map((link) => {
            const Button = app.badge === 'live' ? PrimaryButton : SecondaryButton;

            return (
              <View key={`${app.name}-${link.storeType}`} style={styles.actionItem}>
                <Button label={link.storeType} onPress={() => handlePress(link)} />
              </View>
            );
          })}

          {resolvedLinks.length === 0 ? (
            <View style={styles.pendingAction}>
              <Text style={styles.pendingActionText}>{app.availabilityNote ?? 'Public link pending'}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const videoStyles = {
  player: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
  },
} as const;

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    ...THEME.shadow.soft,
  },
  mediaShell: {
    minHeight: 260,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  previewFallback: {
    flex: 1,
    minHeight: 260,
    padding: 22,
    justifyContent: 'space-between',
    gap: 12,
  },
  previewTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  previewChip: {
    borderRadius: THEME.radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  previewChipText: {
    color: '#f8fafc',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  previewPlatform: {
    color: 'rgba(255,255,255,0.76)',
    fontSize: 12,
    fontWeight: '700',
  },
  previewIconWrap: {
    width: 82,
    height: 82,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  previewIcon: {
    width: 68,
    height: 68,
    borderRadius: 16,
  },
  previewHeadline: {
    color: '#f8fafc',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: -0.4,
  },
  previewBody: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 420,
  },
  playButton: {
    alignSelf: 'flex-start',
    borderRadius: THEME.radius.pill,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  playButtonText: {
    color: '#0f172a',
    fontSize: 14,
    fontWeight: '800',
  },
  comingSoonPill: {
    alignSelf: 'flex-start',
    borderRadius: THEME.radius.pill,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: 'rgba(12,18,31,0.22)',
  },
  comingSoonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    fontWeight: '700',
  },
  body: {
    padding: 20,
    gap: 14,
  },
  labelRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  statePill: {
    borderRadius: THEME.radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  statePillText: {
    color: '#f8fafc',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  platformTag: {
    color: THEME.colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inlineIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    color: THEME.colors.text,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  summary: {
    color: THEME.colors.text,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '700',
  },
  description: {
    color: THEME.colors.subtext,
    fontSize: 14,
    lineHeight: 21,
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionItem: {
    minWidth: 150,
  },
  pendingAction: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: THEME.colors.cardBorder,
    backgroundColor: 'rgba(255,255,255,0.04)',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  pendingActionText: {
    color: THEME.colors.subtext,
    fontSize: 14,
    fontWeight: '700',
  },
});
