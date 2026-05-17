import { Platform } from 'react-native';

/**
 * Glassmorphism style helpers – translucent backgrounds, soft borders, light inner highlight.
 * Use with BlurView where possible for true frosted glass; otherwise use the returned backgroundColor.
 */
export function getGlassStyles(isDark) {
  return {
    // Main glass surface (nav bars, cards)
    glass: {
      backgroundColor: isDark ? 'rgba(21, 27, 38, 0.72)' : 'rgba(255, 255, 255, 0.65)',
      borderWidth: 1,
      borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.6)',
      shadowColor: isDark ? '#000' : '#8b9dc3',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: isDark ? 0.35 : 0.12,
      shadowRadius: 20,
      elevation: 12,
      overflow: 'hidden',
    },
    // Small interactive surfaces (buttons, icon circles)
    glassButton: {
      backgroundColor: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.5)',
      borderWidth: 1,
      borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
      shadowColor: isDark ? '#000' : '#c7d2e3',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: isDark ? 0.2 : 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    // Inner highlight strip (top edge of glass)
    glassHighlight: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '50%',
      borderTopLeftRadius: 999,
      borderTopRightRadius: 999,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.35)',
    },
    // Card / list item glass
    glassCard: {
      backgroundColor: isDark ? 'rgba(21, 27, 38, 0.85)' : 'rgba(255, 255, 255, 0.55)',
      borderWidth: 1,
      borderColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.5)',
      shadowColor: isDark ? '#000' : '#a8b8d4',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: isDark ? 0.25 : 0.1,
      shadowRadius: 14,
      elevation: 6,
    },
    // Primary CTA with glass overlay (button)
    glassPrimary: {
      borderWidth: 1,
      borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.5)',
      shadowColor: isDark ? '#000' : '#2563eb',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.35,
      shadowRadius: 12,
      elevation: 6,
    },
  };
}

export const GLASS_BORDER_RADIUS = {
  small: 12,
  medium: 16,
  large: 20,
  pill: 999,
};

export const BLUR_TINT = Platform.select({
  ios: 'systemChromeMaterial',
  default: 'default',
});
