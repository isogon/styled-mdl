import reduce from 'lodash/reduce'
import assign from 'lodash/assign'

import animation from './animation'
import badge from './badge'
import button from './button'
import card from './card'
import chip from './chip'
import * as colorDefinitions from './colorDefinitions'
import colors from './colors'
import dataTable from './dataTable'
import dialog from './dialog'
import footer from './footer'
import grid from './grid'
import iconToggle from './iconToggle'
import layout from './layout'
import list from './list'
import menu from './menu'
import progress from './progress'
import radio from './radio'
import shadows from './shadows'
import snackbar from './snackbar'
import spinner from './spinner'
import switcher from './switch'
import textField from './textField'
import tooltip from './tooltip'
import typography from './typography'

const themers = [
  animation,
  badge,
  button,
  card,
  chip,
  colors,
  dataTable,
  dialog,
  footer,
  grid,
  iconToggle,
  layout,
  list,
  menu,
  progress,
  radio,
  shadows,
  snackbar,
  spinner,
  switcher,
  textField,
  tooltip,
  typography,
]

export default function createTheme(overrides = {}) {
  const compiled = reduce(
    themers,
    (theme, themer) => assign({}, theme, themer(overrides)),
    {},
  )

  return assign({}, colorDefinitions, compiled, overrides)
}
