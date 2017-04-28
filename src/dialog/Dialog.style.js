import styled, { css, keyframes } from 'styled-components';

import { shadow24dp } from '../mixins';
import { getters as g } from '../util';

const flyIn = keyframes`
  from {
    transform: translate(-50%, calc(-75% + 45vh));
  }
  to {
    transform: translate(-50%, calc(-75% + 50vh));
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DialogBase = styled.div`
  border: none;
  z-index: 2000;
  position: fixed;
  top: 0;
  right: auto;
  left: 50%;
  background: white;
  max-width: ${({ size }) => parseInt(size, 10) * 56}px;
  ${shadow24dp()}
  animation: ${fadeIn} 0.3s ${g.animationCurveDefault} forwards,
             ${flyIn} 0.3s ${g.animationCurveLinearOutSlowIn} forwards;
  animation-fill-mode: forwards;
`;

export const DialogTitle = styled.h1`
  padding: 32px 32px 0;
  margin: 0;
  font-size: 2.5rem;
`;

export const DialogActions = styled.div`
  padding: 24px 24px;
  margin: 0 -8px 0 0;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  > * {
    margin-right: 8px;
    height: 36px;
  }
  ${({ fullWidth }) => fullWidth && css`
    padding: 0 0 8px 0;
    > * {
      height: 48px;
      flex: 0 0 auto;
      width: 100%;
      padding-right: 16px;
      margin-right: 0;
      text-align: right;
    }
  `}
`;

export const DialogContent = styled.div`
  padding: 20px 32px 24px 32px;
  color: ${g.dialogContentColor};
`;
