import * as defaults from './defaults';
import createThemer from '../createThemer';
import { rgba, rgb } from '../../../util/colors';

export default createThemer(defaults, (theme) => ({
  badgeColor: rgb(theme.colorAccentContrast),
  badgeColorInverse: rgb(theme.colorAccent),
  badgeBackground: rgb(theme.colorAccent),
  badgeBackgroundInverse: rgba(theme.colorAccentContrast, 0.2),
}));
