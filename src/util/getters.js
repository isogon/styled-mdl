import { mapValues } from 'lodash'
import { defaultTheme } from '../theme'
import { rgb, rgba } from './colors'

const getters = mapValues(defaultTheme, (v, k) => (p) => p.theme[k])

getters.fg = (p) => p.theme.fg || p.theme.textColorPrimary
getters.bg = (p) => p.theme.bg || `rgb(${p.theme.white})`

getters.rgb = (base, value) => (p) => rgb(p.theme[base][value])
getters.rgba = (base, value, alpha) => (p) => rgba(p.theme[base][value], alpha)
getters.rgbFromProp = (prop, fallback) => (p) => {
  const color = p[prop]

  if (!color) {
    return fallback ? fallback(p) : 'none'
  }

  const [base, value = 500] = color.split('|')

  return rgb(p.theme[base][parseInt(value, 10)])
}

export default getters
