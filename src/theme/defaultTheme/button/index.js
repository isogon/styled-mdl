import { transparentize } from 'polished';
import { compose } from 'lodash/fp';
import { ref } from '../helpers';

export default {
  minWidth: 64,
  height: 36,
  padding: 16,
  margin: 4,
  borderRadius: 2,

  // default colors
  hoverColor: ref('button.primaryColor'),
  primaryColor: compose(transparentize(0.8), ref('colors.grey.500')),
  secondaryColor: ref('colors.black'),
  activeColor: compose(transparentize(0.6), ref('colors.grey.500')),
  focusColor: compose(transparentize(0.88), ref('colors.black')),

  // Disabled  colors.
  primaryColorDisabled: compose(transparentize(0.88), ref('colors.black')),
  secondaryColorDisabled: compose(transparentize(0.74), ref('colors.black')),

  // Icon  colors and sizes.
  iconColor: ref('colors.gray.700'),

  // Colored  colors.
  primaryColorAlt: ref('colors.primary'),
  secondaryColorAlt: ref('colors.primaryContrast'),
  hoverColorAlt: ref('colors.primary'),
  activeColorAlt: ref('colors.primary'),
  focusColorAlt: ref('button.focusColor'),

  // Ripple color for colored raised buttons.
  rippleColorAlt: ref('colors.primaryContrast'),

  // FAB colors and sizes.
  fabColorAlt: ref('colors.accent'),
  fabHoverColorAlt: ref('colors.accent'),
  fabActiveColorAlt: ref('colors.accent'),
  fabTextColorAlt: ref('colors.accentContrast'),
  fabRippleColorAlt: ref('colors.accentContrast'),
  fabSize: 56,
  fabSizeMini: 40,
  fabFontSize: 24,

  // Icon  colors and sizes.
  iconFocusColor: ref('button.focusColor'),
  iconSize: 32,
  iconSizeMini: 24,
};
