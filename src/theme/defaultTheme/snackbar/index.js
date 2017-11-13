import createThemer from '../createThemer';
import { colorAccent } from '../colors/defaults';
import { gridTabletBreakpoint } from '../grid';
import { rgb } from '../../../util/colors';

export default createThemer({ colorAccent, gridTabletBreakpoint }, (theme) => ({
  snackbarTabletBreakpoint: theme.gridTabletBreakpoint,
  snackbarActionColor: rgb(theme.colorAccent),
}));
