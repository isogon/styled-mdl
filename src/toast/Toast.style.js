import styled, { css } from 'styled-components';
import { getters as g } from '../util';

export const ToastAnimation = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;
  display: block;
  will-change: transform;
  transform: translate(0, 100%);
  transition: transform 0.25s ${g.animationCurveFastOutLinearIn};
  @media(max-width: ${({ theme }) => theme.snackbarTabletBreakpoint - 1}px) {
    width: 100%;
    left: 0;
  }

  @media(min-width: ${g.snackbarTabletBreakpoint}px) {
    ${({ position }) => {
      switch (position) {
        case 'left':
          return css`
            bottom: 0;
            left: 0;
            transform: translate(0, 100%);
          `;
        case 'right':
          return css`
            bottom: 0;
            right: 0;
            transform: translate(0, 100%);
          `;
        default:
          return css`
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 100%);
          `;
      }
    }}
  }

  ${({ isActive }) => isActive && css`
    transform: translate(0, 0);
    transition: transform 0.25s ${g.animationCurveLinearOutSlowIn};
    @media(min-width: ${g.snackbarTabletBreakpoint}px) {
      ${({ position }) => {
        switch (position) {
          case 'left':
          case 'right':
            return css`
              transform: translate(0, 0);
            `;
          default:
            return css`
              left: 50%;
              transform: translate(-50%, 0);
            `;
        }
      }}
    }
  `}
`;
