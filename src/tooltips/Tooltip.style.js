import styled, { css } from 'styled-components';
import { getters as g } from '../util';
import { arrowTop, arrowBottom, arrowLeft, arrowRight } from '../mixins';

export const TooltipWrapper = styled.div`
  display: inline-block;
`;

export const TooltipPosition = styled.div`
  position: fixed;
  transform: scale(0.6);
  opacity: 0;
  z-index: 999999;
  transition: opacity 0.2s ${g.animationCurveLinearOutSlowIn},
              transform 0.2s ${g.animationCurveLinearOutSlowIn};
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    transform: none;
  `}
  ${({ position, x, y }) => {
    switch (position) {
      case 'above':
        return css`
          top: ${y - 7}px;
          left: ${x}px;
          transform-origin: bottom center;
        `;
      case 'below':
        return css`
          top: ${y + 7}px;
          left: ${x}px;
          transform-origin: top center;
        `;
      case 'left':
        return css`
          top: ${y}px;
          left: ${x - 7}px;
          transform-origin: center right;
        `;
      case 'right':
        return css`
          top: ${y}px;
          left: ${x + 7}px;
          transform-origin: center left;
      `;
      default:
        return null;
    }
  }}
`;

export const TooltipBase = styled.div`
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
  ${({ large }) => large && css`
    font-size: ${g.tooltipFontSizeLarge}px;
    padding: 16px;
  `}
  ${({ position, theme }) => {
    switch (position) {
      case 'above':
        return css`
          transform: translate(-50%, -100%);
          ${arrowBottom('5px', theme.tooltipBackgroundColor)}
        `;
      case 'below':
        return css`
          transform: translate(-50%, 0);
          ${arrowTop('5px', theme.tooltipBackgroundColor)}
        `;
      case 'left':
        return css`
          transform: translate(-100%, -50%);
          ${arrowRight('5px', theme.tooltipBackgroundColor)}
        `;
      case 'right':
        return css`
          transform: translate(0%, -50%);
          ${arrowLeft('5px', theme.tooltipBackgroundColor)}
      `;
      default:
        return null;
    }
  }}
`;
