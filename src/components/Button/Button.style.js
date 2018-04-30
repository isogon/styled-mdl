import { ifProp } from 'styled-tools'
import styled, { css } from 'styled-components'

import {
  animationDefaultValue,
  elevation,
  elevationTransitionValue,
} from '../../mixins'
import { buttonColor, roundButtonStyles } from './ButtonMixins.style'
import Ripple from '../Ripple'
import alpha from '../../utils/alpha'
import grey from '../../theme/colors/grey'
import themeProps from '../../theme/themeProps'

export const minWidth = 4
export const height = 2.25
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius}rem;
  position: relative;
  height: ${height}rem;
  line-height: ${height}rem;
  margin: 0;
  min-width: ${minWidth}rem;
  padding: 0 ${padding}rem;
  white-space: nowrap;
  font-family: ${themeProps.preferredFont};
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08929em;
  text-decoration: none;
  transition:
    ${elevationTransitionValue()},
    ${animationDefaultValue('color')};
  will-change: box-shadow, color;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  user-select: none;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  &::-moz-focus-inner {
    border: 0;
  }
  &:disabled {
    cursor: default;
  }
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

export const ButtonStyle = styled.button`
  ${buttonStyles}
  ${flatButtonColors}
  ${ifProp('raised', css`
    ${raisedButtonColors}
    ${elevation(2)}
    &:focus, &:hover { ${elevation(3)} }
    &:active { ${elevation(8)} }
    &:disabled { ${elevation(0)} }
  `)}
  ${ifProp('fab', css`
    ${raisedButtonColors}
    ${roundButtonStyles(fabSize, fabSizeMini)}
    ${elevation(6)}
    &:focus, &:hover { ${elevation(8)} }
    &:active { ${elevation(12)} }
    &:disabled { ${elevation(0)} }
  `)}
  ${ifProp('icon', css`
    ${roundButtonStyles(iconSize, iconSizeMini)}
    ${Ripple} {
      display: none;
    }
  `)}
`
