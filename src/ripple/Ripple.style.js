import styled, { css } from 'styled-components';
import { getters as g, rgba } from '../util';

export const Effect = styled.div`
  background: #fff;
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  transform: ${({ transform }) => transform || 'none'};
  opacity: ${({ opacity }) => opacity};
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  ${({ dark }) => dark && css`
    background: rgba(0,0,0,.3);
  `}
  ${({ colored }) => colored && css`
    background: ${({ theme }) => rgba(theme.colorPrimary, 0.5)};
  `}
  ${({ accent }) => accent && css`
    background: ${({ theme }) => rgba(theme.colorAccent, 0.5)};
  `}
  ${({ shouldAnimate }) => shouldAnimate && css`
    transition: transform 0.6s ${g.animationCurveLinearOutSlowIn},
                width 0.6s ${g.animationCurveLinearOutSlowIn},
                height 0.6s ${g.animationCurveLinearOutSlowIn},
                opacity 1.2s ${g.animationCurveLinearOutSlowIn};
  `}
`;

export const Wrap = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  overflow: hidden;
  ${({ toggle }) => toggle && css`
    top: -6px;
    left: -10px;
    right: auto;
    bottom: auto;
    height: 36px;
    width: 36px;
  `}
  ${({ round }) => round && css`
    border-radius: 50%;
    // Fixes clipping bug in Safari.
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
  `}
`;
