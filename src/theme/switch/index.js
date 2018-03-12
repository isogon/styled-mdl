import * as defaults from './defaults';
import createThemer from '../createThemer';

export default createThemer(defaults, (theme) => ({
  switchTrackTop: (theme.switchLabelHeight - theme.switchTrackHeight) / 2,
  switchThumbTop: (theme.switchLabelHeight - theme.switchThumbSize) / 2,
  switchRippleSize: theme.switchLabelHeight * 2,
}));
