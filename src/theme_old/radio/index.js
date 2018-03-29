import * as defaults from './defaults'
import createThemer from '../createThemer'

export default createThemer(defaults, (theme) => ({
  radioInnerMargin: theme.radioButtonSize / 4,
  radioTopOffset: (theme.radioLabelHeight - theme.radioButtonSize) / 2,
}))
