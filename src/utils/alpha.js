import Color from 'color'
import anyPass from 'lodash/fp/overSome'
import curry from 'lodash/fp/curry'
import propEq from 'lodash/fp/matchesProperty'

const isHex = anyPass([propEq('length', 3), propEq('length', 6)])

const alpha = curry((a, c) => {
  const color = Color(isHex(c) ? `#${c}` : c)
  return color.alpha(a).rgbaString()
})

export default alpha
