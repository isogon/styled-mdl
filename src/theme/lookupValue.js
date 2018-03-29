import get from 'lodash/fp/get'

import { THEME_KEY } from './createTheme'
import defaultTheme from './defaultTheme'

export default function lookupValue(valuePath) {
  const themePath = `${THEME_KEY}.${valuePath}`
  const propsPath = `theme.${themePath}`
  const defaultValue = get(themePath, defaultTheme)

  return (props) => get(propsPath, props) || defaultValue
}
