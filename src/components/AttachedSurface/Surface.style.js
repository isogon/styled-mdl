import { ifProp, switchProp } from 'styled-tools'
import compose from 'lodash/fp/flowRight'
import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  SURFACE_EXPAND_DURATION,
  SURFACE_FADE_DURATION,
  TOP_LEFT,
  TOP_RIGHT,
} from './Surface.constants'
import { animationDefaultValue, elevation } from '../../mixins'
import { getters as g } from '../../util'


export const SurfaceContainer = styled.div`
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
  `)};
`

export const SurfaceOutline = styled.div`
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
  ${compose(elevation, get('elevation'))}
  will-change: transform, opacity;
  transition:
    ${animationDefaultValue('transform', SURFACE_EXPAND_DURATION)},
    ${animationDefaultValue('opacity', SURFACE_FADE_DURATION)};
  z-index: -1;
  ${switchProp('position', {
    [BOTTOM_RIGHT]: 'transform-origin: 100% 0;',
    [TOP_LEFT]: 'transform-origin: 0 100%;',
    [TOP_RIGHT]: 'transform-origin: 100% 100%;',
    [BOTTOM_LEFT]: 'transform-origin: 0 0;',
  })}
  ${ifProp('isVisible', css`
    opacity: 1;
    transform: scale(1);
    z-index: 999;
  `)}
`

export const SurfaceStyle = styled.div`
  position: absolute;
  list-style: none;
  top: 0;
  left: 0;
  height: auto;
  width: auto;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 0;
  opacity: 0;
  z-index: -1;
  will-change: opacity, clip;
  background: white;
  ${ifProp('isVisible', css`
    opacity: 1;
    z-index: 999;
    transition:
      ${animationDefaultValue('clip', SURFACE_EXPAND_DURATION)},
      ${animationDefaultValue('opacity', SURFACE_FADE_DURATION)};
    ${switchProp('position', {
      [BOTTOM_RIGHT]: 'left: auto; right: 0;',
      [TOP_LEFT]: 'top: auto; bottom: 0;',
      [TOP_RIGHT]: 'top: auto; right: 0; bottom: 0; left: auto;',
      [BOTTOM_LEFT]: 'top: auto; left: auto;',
    })}
  `)}
`
