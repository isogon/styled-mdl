import styled, { css } from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  position: fixed;
  bottom: 0;
  cursor: default;
  background-color: #323232;
  z-index: 3;
  display: block;
  display: flex;
  justify-content: space-between;
  font-family: ${g.preferredFont};
  will-change: transform;
  transform: translate(0, 100%);
  transition: transform 0.25s ${g.animationCurveFastOutLinearIn};
  pointer-events: none;
  @media(max-width: ${({ theme }) => theme.snackbarTabletBreakpoint - 1}px) {
    width: 100%;
    left: 0;
    min-height: 48px;
  }

  @media(min-width: ${g.snackbarTabletBreakpoint}px) {
    min-width: 288px;
    max-width: 568px;
    border-radius: 2px;
    ${({ position, offsetX, offsetY }) => {
      switch (position) {
        case 'left':
          return css`
            bottom: ${offsetY ? `${offsetY}px` : '0'}
            left: ${offsetX ? `${offsetX}px` : '0'}
            transform: translate(0, calc(100% + ${offsetY}px));
          `;
        case 'right':
          return css`
            bottom: ${offsetY ? `${offsetY}px` : '0'}
            right: ${offsetX ? `${offsetX}px` : '0'}
            transform: translate(0, calc(100% + ${offsetY}px));
          `;
        default:
          return css`
            left: 50%;
            bottom: ${offsetY ? `${offsetY}px` : '0'}
            transform: translate(-50%, calc(100% + ${offsetY}px));
          `;
      }
    }}
  }

  ${({ active }) => active && css`
    transform: translate(0, 0);
    pointer-events: auto;
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
