import createThemer from '../createThemer';
import { rgb } from '../../../util/colors';

export default createThemer({}, (theme) => ({
  snackbarTabletBreakpoint: theme.gridTabletBreakpoint,
  snackbarActionColor: rgb(theme.colorAccent),
}));
