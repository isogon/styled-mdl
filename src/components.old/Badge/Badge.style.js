import { ifProp } from 'styled-tools'
import styled, { css } from 'styled-components'

import { defaultTypography } from '../../mixins/type.style'
import themeProps from '../../theme/themeProps'

const fontSize = 0.75
const fontWeight = 600
const size = 1.375
const padding = 0.125
const overlap = 0.75
const buttonOverlap = 0.875
const foreground = themeProps.textPrimaryOnSecondary
const background = themeProps.secondary

export const BadgeWrap = styled.div`
  position: relative;
  white-space: nowrap;
  display: inline-block;
  margin-right: ${size + padding}rem;
  ${ifProp('overlap', css`
    margin-right: ${size - overlap}rem;
  `)}
  ${ifProp('forButton', css`
    margin-right: ${size - buttonOverlap}rem;
  `)}
`

export const BadgeText = styled.div`
  position: absolute;
  top: ${-(size / 2)}rem;
  right: ${-(size + padding)}rem;
  color: ${foreground};
  background: ${background};
  ${defaultTypography()}
  font-family: ${themeProps.preferredFont};
  font-size: ${fontSize}rem;
  font-weight: ${fontWeight};
  width: ${size}rem;
  height: ${size}rem;
  text-align: center;
  line-height: ${size}rem;
  > * { line-height: ${size}rem }
  border-radius: 50%;
  ${ifProp('forButton', css`
    top: -0.625rem;
    right: -0.625rem;
  `)}
  ${ifProp('overlap', css`
    right: ${-(size - overlap)}rem;
  `)}
`
