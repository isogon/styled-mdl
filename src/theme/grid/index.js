import * as defaults from './defaults';
import createThemer from '../createThemer';

export default createThemer(defaults, (theme) => ({
  gridTabletGutter: theme.gridDesktopGutter,
  gridTabletMargin: theme.gridDesktopMargin,
  gridPhoneGutter: theme.gridDesktopGutter,
  gridPhoneMargin: theme.gridDesktopMargin,
  gridCellDefaultColumns: theme.gridPhoneColumns,
  gridMaxColumns: theme.gridDesktopColumns,
}));
