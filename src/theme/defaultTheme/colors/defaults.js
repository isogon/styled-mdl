import {
  indigo,
  pink,
  red,
  yellow,
  blue,
  green,
  black,
  white,
  grey,
  darkContrast,
  lightContrast,
} from '../colorDefinitions';
import { rgba, rgb } from '../../../util/colors';


/* ==========  General  ========== */

// Use color primarily for emphasis. Choose colors that fit with
// your brand and provide good contrast between visual components.
export const colorPrimary = indigo[500];
export const colorPrimaryDark = indigo[700];
export const colorAccent = pink[500];

// Our primary is dark, so use colorDarkContrast for overlaid text.
export const colorPrimaryContrast = darkContrast;
// Our accent is dark, so use conlorDarkContrast for overlaid text.
export const colorAccentContrast = darkContrast;

/* ==========  Typography  ========== */

// We use the following default color styles: textColorPrimary and
// textColorSecondary. For light themes, use textColorPrimaryInverse
// and textColorSecondaryInverse.
export const textColorPrimary = rgba(black, 0.87);
export const textLinkColor = rgb(pink[700]);

/* ==========  Components  ========== */

/* ==========  Standard Buttons  ========== */

// Default button colors.
export const buttonPrimaryColor = rgba(grey[500], 0.20);
export const buttonSecondaryColor = rgb(black);
export const buttonActiveColor = rgba(grey[500], 0.40);
export const buttonFocusColor = rgba(black, 0.12);

// Disabled button colors.
export const buttonPrimaryColorDisabled = rgba(black, 0.12);
export const buttonSecondaryColorDisabled = rgba(black, 0.26);

// Icon button colors and sizes.
export const buttonIconColor = rgb(grey[700]);

/* ==========  Icon Toggles  ========== */

export const iconToggleColor = rgb(grey[700]);
export const iconToggleDisabledColor = rgba(black, 0.26);

/* ==========  Radio Buttons  ========== */

export const radioOffColor = rgba(black, 0.54);
export const radioDisabledColor = rgba(black, 0.26);

/* ==========  Ripple effect  ========== */

export const rippleBgColor = rgb(lightContrast);

/* ==========  Layout  ========== */

export const layoutNavColor = rgb(grey[300]);

// Drawer
export const layoutDrawerBgColor = rgb(grey[50]);
export const layoutDrawerBorderColor = rgb(grey[300]);
export const layoutTextColor = rgb(grey[800]);
export const layoutDrawerNavigationColor = '#757575';
export const layoutDrawerNavigationLinkActiveBackground = rgb(grey[300]);
export const layoutDrawerNavigationLinkActiveColor = rgb(lightContrast);

// Header
export const layoutHeaderNavHoverColor = rgba(grey[700], 0.6);

// Tabs

/* ==========  Content Tabs  ========== */

export const tabTextColor = rgba(black, 0.54);
export const tabActiveTextColor = rgba(black, 0.87);
export const tabBorderColor = rgb(grey[300]);

/* ==========  Checkboxes  ========== */

export const checkboxOffColor = rgba(black, 0.54);
export const checkboxDisabledColor = rgba(black, 0.26);

/* ==========  Switches  ========== */

export const switchOffThumbColor = rgb(grey[50]);
export const switchOffTrackColor = rgba(black, 0.26);
export const switchDisabledThumbColor = rgb(grey[400]);
export const switchDisabledTrackColor = rgba(black, 0.12);

/* ==========  Spinner  ========== */

export const spinnerColor1 = rgb(blue[400]);
export const spinnerColor2 = rgb(red[500]);
export const spinnerColor3 = rgb(yellow[600]);
export const spinnerColor4 = rgb(green[500]);

/* ==========  Text fields  ========== */

export const inputTextBackgroundColor = 'transparent';
export const inputTextLabelColor = rgba(black, 0.26);
export const inputTextBottomBorderColor = rgba(black, 0.12);
export const inputTextErrorColor = rgb(red[700]);

/* ==========  Card  ========== */

export const cardBackgroundColor = rgb(white);
export const cardTextColor = rgb(black);
export const cardSupportingTextTextColor = rgba(black, 0.54);
export const cardBorderColor = 'rgba(0,0,0,0.1)';
export const cardSubtitleColor = rgba(black, 0.54);

/* ==========  Sliders ========== */

export const rangeBgColor = rgba(black, 0.26);
export const rangeBgFocusColor = rgba(black, 0.12);

/* ==========  List ========== */

export const listMainTextTextColor = rgba(black, 0.87);
export const listSupportingTextTextColor = rgba(black, 0.54);
export const listIconColor = rgb(grey[600]);
export const listAvatarColor = rgb(white);

/* ==========  Item ========== */

// Default Item Colors
export const defaultItemTextColor = rgba(black, 0.87);
export const defaultItemOutlineColor = rgb(grey[400]);
export const defaultItemHoverBgColor = rgb(grey[200]);
export const defaultItemFocusBgColor = rgb(grey[200]);
export const defaultItemActiveBgColor = rgb(grey[300]);
export const defaultItemDividerColor = rgba(black, 0.12);

// Disabled Button Colors
export const disabledItemTextColor = rgb(grey[400]);

/* ==========  Dropdown menu ========== */

export const defaultDropdownBgColor = rgb(white);

/* ==========  Tooltips  ========== */

export const tooltipTextColor = rgb(white);
export const tooltipBackgroundColor = rgba(grey[700], 0.9);

/* ==========  Footer  ========== */

export const footerBgColor = rgb(grey[800]);
export const footerColor = rgb(grey[500]);
export const footerHeadingColor = rgb(grey[300]);
