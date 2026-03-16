export const THEME = {
  colors: {
    bg0: '#05070d',
    bg1: '#0a1020',
    card: 'rgba(255,255,255,0.06)',
    cardBorder: 'rgba(255,255,255,0.12)',
    text: 'rgba(245,247,255,0.92)',
    subtext: 'rgba(245,247,255,0.72)',
    muted: 'rgba(245,247,255,0.52)',
    accentA: '#7c3aed', // violet
    accentB: '#06b6d4', // cyan
    live: '#22c55e',
    demo: '#f59e0b',
  },
  radius: {
    lg: 18,
    md: 14,
    pill: 999,
  },
  shadow: {
    soft: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.35,
      shadowRadius: 18,
      elevation: 10,
    },
  },
} as const;
