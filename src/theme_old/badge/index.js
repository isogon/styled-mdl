import * as defaults from './defaults'
import { colorAccentContrast, colorAccent } from '../colors/defaults'
import createThemer from '../createThemer'
import { rgba, rgb } from '../../util/colors'

export default createThemer(
  { colorAccentContrast, colorAccent, ...defaults },
  (theme) => ({
    badgeColor: rgb(theme.colorAccentContrast),
    badgeColorInverse: rgb(theme.colorAccent),
    badgeBackground: rgb(theme.colorAccent),
    badgeBackgroundInverse: rgba(theme.colorAccentContrast, 0.2),
  }),
)
