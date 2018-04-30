import { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import camelCase from 'lodash/fp/camelCase'

export const configurable = (styleName, defaultValue, propName = camelCase(styleName)) => {
  const getter = (p) => p[propName] || defaultValue
  return defaultValue
    ? css`${styleName}: ${getter}`
    : css`${ifProp(propName, css`${styleName}: ${getter}`)}`
}
