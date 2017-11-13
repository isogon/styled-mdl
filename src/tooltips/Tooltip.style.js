import { call, ifProp, switchProp, prop } from 'styled-tools';
import { subtract, add, always } from 'lodash/fp';
import { setDisplayName } from 'recompose';
import styled, { css } from 'styled-components';

import { arrowTop, arrowBottom, arrowLeft, arrowRight } from '../mixins';
import { getters as g } from '../util';

export const TooltipWrapper = setDisplayName('TooltipWrapper')(styled.div`
  display: inline-block;
`);

export const TooltipPosition = setDisplayName('TooltipPosition')(styled.div`
  position: fixed;
  transform: scale(0.6);
  opacity: 0;
  z-index: 999999;
  transition: opacity 0.2s ${g.animation.linearOutSlowIn},
              transform 0.2s ${g.animation.linearOutSlowIn};
  ${ifProp('isVisible', css`
    opacity: 1;
    transform: none;
  `)}
  ${switchProp('position', {
    above: css`
      top: ${call(subtract, prop('y'), always(7))}px;
      left: ${prop('x')}px;
      transform-origin: bottom center;
    `,
    below: css`
      top: ${call(add, prop('y'), always(7))}px;
      left: ${prop('x')}px;
      transform-origin: top center;
    `,
    left: css`
      top: ${prop('y')}px;
      left: ${call(subtract, prop('x'), always(7))}px;
      transform-origin: center right;
    `,
    right: css`
      top: ${prop('y')}px;
      left: ${call(add, prop('x'), always(7))}px;
      transform-origin: center left;
    `,
  })}
`);

export const TooltipStyle = setDisplayName('TooltipBase')(styled.div`
  display: block;
  background: ${g.tooltipBackgroundColor};
  color: ${g.tooltipTextColor};
  font-size: ${g.tooltipFontSize}px;
  line-height: 14px;
  padding: 8px;
  border-radius: 2px;
  user-select: none;
  pointer-events: none;
  position: absolute;
  white-space: nowrap;
  text-align: center;
  ${ifProp('large', css`
    font-size: ${g.tooltipFontSizeLarge}px;
    padding: 16px;
  `)}
  ${switchProp('position', {
    above: css`
      transform: translate(-50%, -100%);
      ${call(arrowBottom('5px'), g.tooltipBackgroundColor)}
    `,
    below: css`
      transform: translate(-50%, 0);
      ${call(arrowTop('5px'), g.tooltipBackgroundColor)}
    `,
    left: css`
      transform: translate(-100%, -50%);
      ${call(arrowRight('5px'), g.tooltipBackgroundColor)}
    `,
    right: css`
      transform: translate(0%, -50%);
      ${call(arrowLeft('5px'), g.tooltipBackgroundColor)}
    `,
  })}
`);
