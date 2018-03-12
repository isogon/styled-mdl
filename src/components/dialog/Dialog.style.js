import styled, { css, keyframes } from 'styled-components';

import { shadow24dp } from '../../mixins';
import { getters as g } from '../../util';

const flyIn = keyframes`
  from {
    transform: translate(0, 5vh);
  }
  to {
    transform: translate(0, 0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DialogStyle = styled.div.attrs({
  width: ({ size }) => `${parseInt(size || 5, 10) * 56}px`,
})`
  background: white;
  width: ${({ width }) => width};
  max-width: calc(100vw - 144px);
  max-height: 80vh;
  margin-top: -15vh;
  border-radius: 3px;
  ${shadow24dp()}
  overflow: auto;
  animation: ${fadeIn} 0.3s ${g.animationCurveDefault} forwards,
             ${flyIn} 0.3s ${g.animationCurveLinearOutSlowIn} forwards;
`;

export const DialogTitle = styled.h1`
  padding: 24px 24px 0;
  margin: 0;
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
`;

export const DialogContent = styled.div`
  padding: 20px 24px 24px;
  font-size: 16px;
  line-height: 24px;
  color: ${g.dialogContentColor};
`;

export const DialogActions = styled.div`
  position: relative;
  padding: 8px 0 8px 24px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  > * {
    margin-right: 8px;
    height: 36px;
  }
  ${({ fullWidth }) => fullWidth && css`
    padding: 0 0 8px 0;
    right: 0;
    > * {
      height: 48px;
      flex: 0 0 auto;
      width: 100%;
      padding-right: 16px;
      margin-right: 0;
      text-align: right;
      justify-content: flex-end;
      border-radius: 0;
    }
  `}
`;
