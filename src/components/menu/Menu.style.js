import { ifProp, switchProp } from 'styled-tools'
import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import { animationDefaultValue, elevation, typoBody1 } from '../../mixins'
import { buttonColor } from '../Button/ButtonMixins.style'
import { getters as g } from '../../util'
import menuPositions from './menuPositions'
import themeProps from '../../theme/themeProps'

export const MENU_EXPAND_DURATION = 300
const MENU_FADE_DURATION = 200

export const MenuControlWrap = styled.div`
  position: relative;
  display: inline-flex;
`

const height = get('height')
const width = get('width')
const top = get('top')
const left = get('left')

const getInitialMenuClip = switchProp('position', {
  [menuPositions.bottomRight]: css`rect(0, ${width}px, 0, ${width}px)`,
  [menuPositions.topLeft]: css`rect(${height}px, 0, ${height}px, 0)`,
  [menuPositions.topRight]: css`rect(${height}px, ${width}px, ${height}px, ${width}px)`,
  [menuPositions.bottomLeft]: css`rect(0, 0, 0, 0)`,
})

export const MenuContainer = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  position: fixed;
  overflow: visible;
  height: 0;
  width: 0;
  visibility: hidden;
  z-index: -1;
  ${ifProp('isVisible', css`
    z-index: 999;
    visibility: visible;
    top: ${top}px;
    left: ${left}px;
    height: ${height}px;
    width: ${width}px;
  `)};
`

export const MenuOutline = styled.div`
  display: block;
  background: ${g.defaultDropdownBgColor};
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: 0;
  transform: scale(0);
  transform-origin: 0 0;
  ${elevation(2)}
  will-change: transform, opacity;
  transition:
    ${animationDefaultValue('transform', MENU_EXPAND_DURATION)},
    ${animationDefaultValue('opacity', MENU_FADE_DURATION)};
  z-index: -1;
  ${switchProp('position', {
    [menuPositions.bottomRight]: 'transform-origin: 100% 0;',
    [menuPositions.topLeft]: 'transform-origin: 0 100%;',
    [menuPositions.topRight]: 'transform-origin: 100% 100%;',
    [menuPositions.bottomLeft]: 'transform-origin: 0 0;',
  })}
  ${ifProp('isVisible', css`
    opacity: 1;
    transform: scale(1);
    z-index: 999;
    height: ${height}px;
    width: ${width}px;
  `)}
`

export const MenuBase = styled.div`
  position: absolute;
  list-style: none;
  top: 0;
  left: 0;
  height: auto;
  width: auto;
  min-width: 124px;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 8px 0;
  margin: 0;
  opacity: 0;
  z-index: -1;
  will-change: opacity, clip;
  background: white;
  clip: ${getInitialMenuClip};
  ${ifProp('isVisible', css`
    opacity: 1;
    height: ${height}px;
    width: ${width}px;
    z-index: 999;
    transition:
      ${animationDefaultValue('clip', MENU_EXPAND_DURATION)},
      ${animationDefaultValue('opacity', MENU_FADE_DURATION)};
    clip: rect(0, ${width}px, ${height}px, 0);
    ${switchProp('position', {
      [menuPositions.bottomRight]: 'left: auto; right: 0;',
      [menuPositions.topLeft]: 'top: auto; bottom: 0;',
      [menuPositions.topRight]: 'top: auto; right: 0; bottom: 0; left: auto;',
      [menuPositions.bottomLeft]: 'top: auto; left: auto;',
    })}
  `)}
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
  ${buttonColor(themeProps.textPrimaryOnLight, 'transparent')}
`
