import { css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { RippleEffect } from '../Ripple/Ripple.style'
import { animationDefaultValue } from '../../mixins'
import { scaledAlpha } from '../../utils/alpha'
import Ripple from '../Ripple'
import themeProps from '../../theme/themeProps'
import withPropArgs from '../../utils/withPropArgs'

export const buttonColor = withPropArgs((text, bg) => css`
  color: ${text};
  background-color: ${bg};
  &:disabled {
    color: ${themeProps.textDisabledOnLight};
    background-color: ${bg === 'transparent' ? bg : themeProps.divider};
    ${Ripple} {
      display: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    opacity: 0;
    transition: ${animationDefaultValue('opacity')};
    will-change: opacity;
    background-color: ${scaledAlpha(0.5, 1, text)};
  }
  &:hover:after {
    opacity: 0.08;
  }
  &:focus:not(:active):after {
    opacity: 0.24;
  }
  &:active:after {
    opacity: 0.24;
  }
  &:disabled:after {
    content: none;
  }
  ${RippleEffect} {
    background-color: ${scaledAlpha(0.12, 0.32, text)};
  }
`)

export const roundButtonStyles = (big, small, fontSize) => css`
  font-size: ${fontSize}rem;
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
