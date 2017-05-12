import * as defaults from './defaults';
import createThemer from '../createThemer';

export default createThemer(defaults, (theme) => ({
  layoutDrawerWidth: theme.layoutDrawerNarrow,
  layoutMobileHeaderHeight: theme.layoutHeaderMobileRowHeight,
  layoutDesktopHeaderHeight: theme.layoutHeaderDesktopRowHeight,
}));
