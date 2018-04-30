const ANIMATION_CURVE_FAST_OUT_SLOW_IN = 'cubic-bezier(0.4, 0, 0.2, 1)'
const ANIMATION_CURVE_LINEAR_OUT_SLOW_IN = 'cubic-bezier(0, 0, 0.2, 1)'
const ANIMATION_CURVE_FAST_OUT_LINEAR_IN = 'cubic-bezier(0.4, 0, 1, 1)'

export const animationFastOutSlowInValue = (property, duration = 280) =>
  `${property} ${ANIMATION_CURVE_FAST_OUT_SLOW_IN} ${duration}ms`

export const animationLinearOutSlowInValue = (property, duration = 280) =>
  `${property} ${ANIMATION_CURVE_LINEAR_OUT_SLOW_IN} ${duration}ms`

export const animationFastOutLinearInValue = (property, duration = 280) =>
  `${property} ${ANIMATION_CURVE_FAST_OUT_LINEAR_IN} ${duration}ms`

export const animationDefaultValue = animationFastOutSlowInValue
