import { cond, prop, always, T } from 'lodash/fp'
import { ifProp } from 'styled-tools'
import compose from 'lodash/fp/flowRight'
import styled, { css } from 'styled-components'

import { animationLinearOutSlowInValue } from '../../mixins'
import alpha from '../../utils/alpha'
import themeProps from '../../theme/themeProps'

export const RippleEffect = styled.div`
  background-color: ${cond([
    [prop('dark'), always('rgba(0,0,0,0.2)')],
    [prop('colored'), compose(alpha(0.5), themeProps.primary)],
    [prop('secondary'), compose(alpha(0.5), themeProps.secondary)],
    [T, themeProps.textHintOnDark],
  ])};
  border-radius: 50%;
  transform: 'none';
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition:
    ${animationLinearOutSlowInValue('transform', 750)},
    ${animationLinearOutSlowInValue('width', 750)},
    ${animationLinearOutSlowInValue('height', 750)},
    ${animationLinearOutSlowInValue('opacity', 750)};
  will-change: transform, width, height, opacity;
`

export const RippleStyle = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  overflow: hidden;
  ${ifProp('toggle', css`
    top: -6px;
    left: -10px;
    right: auto;
    bottom: auto;
    height: 36px;
    width: 36px;
  `)}
  ${ifProp('round', css`
    border-radius: 50%;
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
  `)}
`
