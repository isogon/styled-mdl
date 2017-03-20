import styled, { css } from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  cursor: default;
  background-color: #323232;
  z-index: 3;
  display: block;
  display: flex;
  justify-content: space-between;
  font-family: ${g.preferredFont};
  will-change: transform;
  transform: translate(0, 80px);
  transition: transform 0.25s ${g.animationCurveFastOutLinearIn};
  pointer-events: none;
  @media(max-width: ${({ theme }) => theme.snackbarTabletBreakpoint - 1}px) {
    width: 100%;
    left: 0;
    min-height: 48px;
    max-height: 80px;
  }
  @media(min-width: ${g.snackbarTabletBreakpoint}px) {
    min-width: 288px;
    max-width: 568px;
    border-radius: 2px;
    transform: translate(-50%, 80px);
  }
  ${({ active }) => active && css`
    transform: translate(0, 0);
    pointer-events: auto;
    transition: transform 0.25s ${g.animationCurveLinearOutSlowIn};

    @media(min-width: ${g.snackbarTabletBreakpoint}px) {
      transform: translate(-50%, 0);
    }
  `}
`;
