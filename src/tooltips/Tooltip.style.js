import styled, { css } from 'styled-components';
import { getters as g } from '../util';
import { arrowTop, arrowBottom, arrowLeft, arrowRight } from '../mixins';

export const TooltipWrapper = styled.div`

`;

export const TooltipContent = styled.div`
  display: inline-block;
`;

export const TooltipPosition = styled.div`
  position: fixed;
  top: ${({ y }) => y - 7}px;
  left: ${({ x }) => x}px;
  transform: scale(0.6);
  opacity: 0;
  transform-origin: bottom center;
  transition: opacity 0.2s ${g.animationCurveLinearOutSlowIn},
              transform 0.2s ${g.animationCurveLinearOutSlowIn};
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    transform: none;
  `}
  ${({ below }) => below && css`
    top: ${({ y }) => y + 7}px;
    left: ${({ x }) => x}px;
    transform-origin: top center;
  `}
  ${({ left }) => left && css`
    top: ${({ y }) => y}px;
    left: ${({ x }) => x - 7}px;
    transform-origin: center right;
  `}
  ${({ right }) => right && css`
    top: ${({ y }) => y}px;
    left: ${({ x }) => x + 7}px;
    transform-origin: center left;
  `}
`;

const tooltipPositionTop = 'translate(-50%, -100%)';
const tooltipPositionBottom = 'translate(-50%, 0)';
const tooltipPositionLeft = 'translate(-100%, -50%)';
const tooltipPositionRight = 'translate(0%, -50%)';

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
  ${({ below, left, right }) => !below && !left && !right && css`
    transform: ${tooltipPositionTop};
    ${({ theme }) => arrowBottom('5px', theme.tooltipBackgroundColor)}
  `}
  ${({ below }) => below && css`
    transform: ${tooltipPositionBottom};
    ${({ theme }) => arrowTop('5px', theme.tooltipBackgroundColor)}
  `}
  ${({ left }) => left && css`
    transform: ${tooltipPositionLeft};
    ${({ theme }) => arrowRight('5px', theme.tooltipBackgroundColor)}
  `}
  ${({ right }) => right && css`
    transform: ${tooltipPositionRight};
    ${({ theme }) => arrowLeft('5px', theme.tooltipBackgroundColor)}
  `}
`;
