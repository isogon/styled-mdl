import anyPass from 'lodash/fp/overSome'
import curry from 'lodash/fp/curry'
import propEq from 'lodash/fp/matchesProperty'

import Color from 'color'

import lumaPercent from './lumaPercent'

const isHex = anyPass([propEq('length', 3), propEq('length', 6)])

const alpha = curry((a, c) => {
  const color = Color(isHex(c) ? `#${c}` : c)
  return color.alpha(a).rgbaString()
})

const scaleBetween = (min, max, scaler) => min + scaler * (max - min)

export const scaledAlpha = curry((min, max, c) =>
  alpha(scaleBetween(min, max, lumaPercent(c)), c),
)

export default alpha
