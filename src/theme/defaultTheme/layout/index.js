import { compose } from 'recompose';
import { transparentize } from 'polished';

import { ref } from '../helpers';

export default {
  drawerNarrow: 240,
  drawerWide: 456,
  drawerWidth: ref('layout.drawerNarrow'),
  drawerBgColor: ref('colors.grey.50'),
  drawerBorderColor: ref('colors.grey.300'),
  textColor: ref('colors.grey.800'),
  drawerNavigationColor: '#757575',
  drawerNavigationLinkActiveBackground: ref('colors.grey.300'),
  drawerNavigationLinkActiveColor: ref('colors.lightContrast'),

  headerIconSize: 32,
  screenSizeThreshold: 1024,
  headerIconMargin: 24,
  drawerButtonMobileSize: 32,
  drawerButtonDesktopSize: 48,

  headerMobileRowHeight: 56,
  headerDesktopRowHeight: 64,

  mobileHeaderHeight: ref('layout.headerMobileRowHeight'),
  desktopHeaderHeight: ref('layout.headerDesktopRowHeight'),

  headerDesktopBaseline: 80,
  headerMobileBaseline: 72,
  headerMobileIndent: 16,
  headerDesktopIndent: 40,

  headerNavHoverColor: compose(transparentize(0.4), ref('colors.grey.700')),
  navColor: ref('colors.grey.300'),

  tabFontSize: 14,
  tabBarHeight: 48,
  tabMobilePadding: 12,
  tabDesktopPadding: 24,
  tabHighlightThickness: 2,

  tabTextColor: compose(transparentize(0.45), ref('colors.black')),
  tabActiveTextColor: compose(transparentize(0.13), ref('colors.black')),
  tabBorderColor: ref('colors.grey.300'),
};
