import { ifProp } from 'styled-tools'
import isFunction from 'lodash/fp/isFunction'
import styled, { css } from 'styled-components'

import { animationDefaultValue } from '../../mixins/animations.style'
import {
  elevation,
  elevationTransitionValue,
} from '../../mixins/elevation.style'
import Ripple from '../Ripple'
import alpha from '../../utils/alpha'
import grey from '../../theme/colors/grey'
import themeProps from '../../theme/themeProps'

export const minWidth = 4
export const height = 2
export const padding = 1
export const margin = 0.25
export const borderRadius = 0.125
export const fabSize = 3.5
export const fabSizeMini = 2.5
export const fabFontSize = 1.5
export const iconSize = 2
export const iconSizeMini = 1.5

const buttonStyles = css`
  background: transparent;
  border: none;
  border-radius: ${borderRadius}rem;
  position: relative;
  height: ${height}rem;
  line-height: ${height}rem;
  margin: 0;
  min-width: ${minWidth}rem;
  padding: 0 ${padding}rem;
  white-space: nowrap;
  display: inline-flex;
  font-family: ${themeProps.preferredFont}
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0;
  overflow: hidden;
  will-change: box-shadow;
  text-decoration: none;
  transition:
    ${elevationTransitionValue()},
    ${animationDefaultValue('color')}
  will-change: box-shadow, color;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  &::-moz-focus-inner {
    border: 0;
  }
  &:before, &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    transition: ${animationDefaultValue('opacity')}
    will-change: opacity;
  }
  &:hover:before {
    opacity: 0.12;
  }
  &:focus:not(:active):after {
    opacity: 0.38;
  }
  &:active:after {
    opacity: 0.54;
  }
`

const withPropArgs = (f) => (...gs) => (o) =>
  f(...gs.map((g) => isFunction(g) ? g(o) : g))


const buttonColor = withPropArgs((text, bg) => css`
  color: ${text};
  background-color: ${bg};
  &:before, &:after {
    background-color: ${text};
  }
  ${Ripple} {
    background-color: ${alpha(0.38, text)};
  }
`)

const roundButton = (big, small) => css`
  border-radius: 50%;
  height: ${big}rem;
  min-width: ${big}rem;
  width: ${big}rem;
  padding: 0;
  overflow: hidden;
  line-height: normal;
  ${ifProp('mini', css`
    height: ${small}rem;
    min-width: ${small}rem;
    width: ${small}rem;
  `)}
`

const raisedButtonElevation = css`
  ${elevation(2)}
  &:active { ${elevation(8)} }
  &:focus:not(:active) { ${elevation(3)} }
`

const flatButtonColors = css`
  ${buttonColor(
    themeProps.textPrimaryOnLight,
    'transparent',
  )}
  ${ifProp('primary', buttonColor(
    themeProps.primary,
    'transparent',
  ))}
  ${ifProp('secondary', buttonColor(
    themeProps.secondary,
    'transparent',
  ))}
`

const raisedButtonColors = css`
  ${buttonColor(
    themeProps.textPrimaryOnLight,
    alpha(0.2, grey[500]),
  )}
  ${ifProp('primary', buttonColor(
    themeProps.textPrimaryOnPrimary,
    themeProps.primary,
  ))}
  ${ifProp('secondary', buttonColor(
    themeProps.textPrimaryOnSecondary,
    themeProps.secondary,
  ))}
`

export const FlatButton = styled.button`
  ${buttonStyles}
  ${flatButtonColors}
`

export const RasiedButton = styled.button`
  ${buttonStyles}
  ${raisedButtonElevation}
  ${raisedButtonColors}
`

export const FabButton = styled.button`
  ${buttonStyles}
  ${raisedButtonElevation}
  ${raisedButtonColors}
  ${roundButton(fabSize, fabSizeMini)}
  font-size: ${fabFontSize}rem;
`

export const IconButton = styled.button`
  ${buttonStyles}
  ${flatButtonColors}
  ${roundButton(iconSize, iconSizeMini)}
  font-size: ${fabFontSize}rem;
`
