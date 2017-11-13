import { transparentize } from 'polished';
import colorDefinitions from './colorDefinitions.v2';

const {
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
} = colorDefinitions;

export default {
  ...colorDefinitions,

  /* ==========  General  ========== */

  // Use color primarily for emphasis. Choose colors that fit with
  // your brand and provide good contrast between visual components.
  primary: indigo[500],
  primaryDark: indigo[700],
  accent: pink[500],

  // Our primary is dark, so use colorDarkContrast for overlaid text.
  primaryContrast: darkContrast,

  // Our accent is dark, so use conlorDarkContrast for overlaid text.
  accentContrast: darkContrast,

  /* ==========  Typography  ========== */

  // We use the following default color styles: textColorPrimary and
  // textColorSecondary. For light themes, use textColorPrimaryInverse
  // and textColorSecondaryInverse.
  textPrimary: transparentize(0.13, black),
  textLink: pink[700],

  /* ==========  Radio Buttons  ========== */

  radioOffColor: transparentize(0.45, black),
  radioDisabledColor: transparentize(0.74, black),

  /* ==========  Ripple effect  ========== */

  rippleBgColor: lightContrast,

  /* ==========  Layout  ========== */

  // Header

  // Tabs

  /* ==========  Content Tabs  ========== */

  /* ==========  Checkboxes  ========== */

  checkboxOffColor: transparentize(0.45, black),
  checkboxDisabledColor: transparentize(0.74, black),

  /* ==========  Switches  ========== */

  switchOffThumbColor: grey[50],
  switchOffTrackColor: transparentize(0.74, black),
  switchDisabledThumbColor: grey[400],
  switchDisabledTrackColor: transparentize(0.88, black),

  /* ==========  Spinner  ========== */

  spinnerColor1: blue[400],
  spinnerColor2: red[500],
  spinnerColor3: yellow[600],
  spinnerColor4: green[500],

  /* ==========  Text fields  ========== */

  inputTextBackgroundColor: 'transparent',
  inputTextLabelColor: transparentize(0.74, black),
  inputTextBottomBorderColor: transparentize(0.88, black),
  inputTextErrorColor: red[700],

  /* ==========  Card  ========== */

  /* ==========  Sliders ========== */

  rangeBgColor: transparentize(0.74, black),
  rangeBgFocusColor: transparentize(0.88, black),

  /* ==========  List ========== */

  /* ==========  MenuItem ========== */

  // Default Item Colors
  defaultItemTextColor: transparentize(0.13, black),
  defaultItemOutlineColor: grey[400],
  defaultItemHoverBgColor: grey[200],
  defaultItemFocusBgColor: grey[200],
  defaultItemActiveBgColor: grey[300],
  defaultItemDividerColor: transparentize(0.88, black),

  // Disabled menuItem Colors
  disabledItemTextColor: grey[400],

  /* ==========  Dropdown menu ========== */

  defaultDropdownBgColor: white,

  /* ==========  Tooltips  ========== */

  tooltipTextColor: white,
  tooltipBackgroundColor: transparentize(0.1, grey[700]),

  /* ==========  Footer  ========== */

  footerBgColor: grey[800],
  footerColor: grey[500],
  footerHeadingColor: grey[300],
};
