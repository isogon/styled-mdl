import Color from 'color'
import clamp from 'lodash/fp/clamp'
import prop from 'lodash/fp/get'

const minimumContrast = 3.1
const tonalOffset = 0.07
const white = Color('white')
const black = Color('#212121') // 87% black

const clampPercentage = clamp(0, 1)

export function themeTone(c) {
  if (c === 'dark' || c === 'light') {
    return c
  }

  const color = Color(c)
  const lightContrast = color.contrast(white)
  const darkContrast = color.contrast(black)

  return lightContrast < minimumContrast && darkContrast > lightContrast
    ? 'light'
    : 'dark'
}

export function contrastTone(c) {
  return themeTone(c) === 'dark' ? 'light' : 'dark'
}

function tonalVariants(c, numIndexes = 2) {
  const color = Color(c)

  const luminosity = color.luminosity()
  const amount1x = clampPercentage(tonalOffset * numIndexes)
  const amount2x = clampPercentage(tonalOffset * numIndexes * 2)

  const lowerBound = amount1x
  const upperBound = 1 - lowerBound

  if (luminosity <= lowerBound) {
    return {
      dark: color.lighten(amount1x),
      light: color.lighten(amount2x),
    }
  }

  if (luminosity >= upperBound) {
    return {
      dark: color.darken(amount2x),
      light: color.darken(amount1x),
    }
  }

  return {
    dark: color.darken(amount1x),
    light: color.lighten(amount1x),
  }
}

export function darkVariant(color, numIndexes) {
  return prop('dark')(tonalVariants(color, numIndexes))
}

export function lightVariant(color, numIndexes) {
  return prop('light')(tonalVariants(color, numIndexes))
}
