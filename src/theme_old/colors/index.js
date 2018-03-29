import * as defaults from './defaults'
import createThemer from '../createThemer'
import { rgba, rgb } from '../../util/colors'

export default createThemer(defaults, (theme) => ({
  /* ========== Buttons  ========== */

  // Default button colors.
  buttonHoverColor: theme.buttonPrimaryColor,

  // Colored button colors.
  buttonPrimaryColorAlt: rgb(theme.colorPrimary),
  buttonSecondaryColorAlt: rgb(theme.colorPrimaryContrast),
  buttonHoverColorAlt: rgb(theme.colorPrimary),
  buttonActiveColorAlt: rgb(theme.colorPrimary),
  buttonFocusColorAlt: theme.buttonFocusColor,

  // Ripple color for colored raised buttons.
  buttonRippleColorAlt: rgb(theme.colorPrimaryContrast),

  // FAB colors and sizes.
  buttonFabColorAlt: rgb(theme.colorAccent),
  buttonFabHoverColorAlt: rgb(theme.colorAccent),
  buttonFabActiveColorAlt: rgb(theme.colorAccent),
  buttonFabTextColorAlt: rgb(theme.colorAccentContrast),
  buttonFabRippleColorAlt: rgb(theme.colorAccentContrast),

  // Icon button colors and sizes.
  buttonIconFocusColor: theme.buttonFocusColor,

  /* ==========  Icon Toggles  ========== */
  iconToggleFocusColor: theme.buttonFocusColor,
  iconToggleCheckedColor: rgb(theme.colorPrimary),
  iconToggleCheckedFocusColor: rgba(theme.colorPrimary, 0.26),

  /* ==========  Radio Buttons  ========== */
  radioColor: rgb(theme.colorPrimary),

  /* ========== Header  ========== */
  layoutHeaderBgColor: rgb(theme.colorPrimary),
  layoutHeaderTextColor: rgb(theme.colorPrimaryContrast),
  layoutHeaderTabTextColor: rgba(theme.colorPrimaryContrast, 0.6),

  /* ==========  Tabs  ========== */
  layoutHeaderTabHighlight: rgb(theme.colorAccent),
  tabHighlightColor: rgb(theme.colorPrimary),

  /* ==========  Checkboxes  ========== */
  checkboxColor: rgb(theme.colorPrimary),
  checkboxFocusColor: rgba(theme.colorPrimary, 0.26),

  /* ==========  Switches  ========== */
  switchColor: rgb(theme.colorPrimary),
  switchFadedColor: rgba(theme.colorPrimary, 0.26),
  switchThumbColor: rgb(theme.colorPrimary) || theme.switchColor,
  switchTrackColor: rgba(theme.colorPrimary, 0.5),

  /* ==========  Spinner  ========== */
  spinnerSingleColor: rgb(theme.colorPrimary),

  /* ==========  Text fields  ========== */
  inputTextHighlightColor: rgb(theme.colorPrimary),
  inputTextDisabledColor: theme.inputTextBottomBorderColor,
  inputTextDisabledTextColor: theme.inputTextLabelColor,

  /* ==========  Card  ========== */
  cardImagePlaceholderColor: rgb(theme.colorAccent),

  /* ==========  Sliders ========== */
  rangeColor: rgb(theme.colorPrimary),
  rangeFadedColor: rgba(theme.colorPrimary, 0.26),

  /* ========== Progress ========== */
  progressMainColor: rgb(theme.colorPrimary),
  progressSecondaryColor: rgba(theme.colorPrimaryContrast, 0.7),
  progressFallbackBufferColor: rgba(theme.colorPrimaryContrast, 0.9),

  /* ========== Footer ========== */
  footerButtonFillColor: theme.footerColor,
  footerUnderlineColor: theme.footerColor,
}))
