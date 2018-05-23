import { ifProp } from 'styled-tools'
import styled, { css } from 'styled-components'

import { MENU_FADE_DURATION } from './Menu.constants'
import { animationDefaultValue, typoBody1 } from '../../mixins'
import { buttonColor } from '../Button/ButtonMixins.style'
import themeProps from '../../theme/themeProps'


export const MenuWrap = styled.div``

export const MenuList = styled.div.attrs({
  role: 'menu',
})`
  min-width: 124px;
  padding: 8px 0;
`

export const MenuItemAnimationStyle = styled.div`
  opacity: 0;
  transition: ${animationDefaultValue('opacity', MENU_FADE_DURATION)};
  ${ifProp('isVisible', 'opacity: 1;')}
`

export const MenuDivider = styled.hr`
  border-bottom: 1px solid ${themeProps.divider};
  margin: 0;
  height: 0;
  border-top: 0;
`

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  border: none;
  text-align: left;
  margin: 0;
  padding: 0 1rem;
  outline-color: ${themeProps.textSecondaryOnLight};
  position: relative;
  overflow: hidden;
  ${typoBody1()}
  text-decoration: none;
  cursor: pointer;
  height: 3rem;
  line-height: 3rem;
  white-space: nowrap;
  user-select: none;
  &::-moz-focus-inner {
    border: 0;
  }
  ${ifProp('disabled', css`
    color: ${themeProps.textDisabledOnLight};
    background-color: transparent;
    cursor: auto;
    &:hover { background-color: transparent; }
    &:focus { background-color: transparent; }
  `)}
  &:focus {
    outline: none;
  }
  &:after {
    transition: none;
  }
  ${buttonColor(themeProps.textPrimaryOnLight, 'transparent')}
`

MenuItem.isMenuItem = true
