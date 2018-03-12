import * as defaults from './defaults';
import createThemer from '../createThemer';

export default createThemer(defaults, (theme) => ({
  spinnerDuration: (360 * (theme.spinnerArcTime / theme.spinnerArcStartRot)) + (360 - theme.spinnerArcSize),
}));
