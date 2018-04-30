import { ifProp } from 'styled-tools'
import compose from 'lodash/fp/flowRight'
import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import { RippleEffect } from '../Ripple/Ripple.style'
import { animationDefaultValue, configurable } from '../../mixins'
import Button from '../Button'
import Icon from '../Icon'
import Ripple from '../Ripple'
import alpha, { scaledAlpha } from '../../utils/alpha'
import grey from '../../theme/colors/grey'
import themeProps from '../../theme/themeProps'
import withPropArgs from '../../utils/withPropArgs'

const CHIP_HEIGHT = 2

export const ChipStyle = styled.span`
  height: ${CHIP_HEIGHT}rem;
  font-family: ${themeProps.preferredFont};
  font-size: 0.8125rem;
  line-height: ${CHIP_HEIGHT}rem;
  padding: 0 0.75rem;
  border: 0;
  border-radius: ${CHIP_HEIGHT / 2}rem;
  background-color: ${alpha(0.2, grey[500])};
  display: inline-flex;
  align-items: center;
  color: ${themeProps.textPrimaryOnLight};
  margin: 0.125rem 0;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  cursor: default;
  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: ${withPropArgs(scaledAlpha)(0.5, 1, themeProps.textPrimaryOnLight)};
    transition: ${animationDefaultValue('opacity')};
    will-change: opacity;
  }
  &:focus {
    outline: 0;
  }
  ${ifProp('onClick', css`
    cursor: pointer;
    &:focus:after, &:hover:after {
      opacity: 0.12;
    }
    &:active:after {
      opacity: 0.24;
    }
  `, css`
    ${Ripple} {
      display: none;
    }
  `)}
  ${ifProp('selected', css`
    color: ${themeProps.primary};
    background-color: ${compose(alpha(0.12), themeProps.primary)};
    ${RippleEffect} {
      background-color: ${compose(scaledAlpha(0.12, 0.32), themeProps.primary)};
    }
  `)}
`

export const ChipAction = styled(Button)`
  height: ${CHIP_HEIGHT} - 0.125rem;
  width: ${CHIP_HEIGHT} - 0.125rem;
  font-size: 1rem;
`

ChipAction.defaultProps = {
  icon: true,
}

export const ChipIcon = styled(Icon)`
  z-index: 5;
  color: ${themeProps.textHintOnLight};
  ${ifProp('right', css`
    margin: 0 -0.25rem 0 0.5rem;
  `)}
  ${ifProp('left', css`
    margin: 0 0.5rem 0 -0.25rem;
  `)}
  ${ifProp('onClick', css`
    cursor: pointer;
    &:hover {
      color: ${themeProps.textSecondaryOnLight};
    }
  `)}
  font-size: 1.25rem;
`

export const ChipContact = styled.span`
  height: ${CHIP_HEIGHT}rem;
  width: ${CHIP_HEIGHT}rem;
  border-radius: ${CHIP_HEIGHT / 2}rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.5rem 0 -0.75rem;
  overflow: hidden;
  text-align: center;
  font-size: 1.125rem;
  line-height: 2rem;
  ${(p) => configurable('background-color', themeProps.secondary(p))}
  ${configurable('color', 'white', 'textColor')}
  ${ifProp('src', css`
    background-image: url(${get('src')});
    background-size: cover;
    background-position: center;
  `)}
`
