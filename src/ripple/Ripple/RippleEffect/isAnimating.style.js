import { keyframes, css } from 'styled-components';
import { makeModifier } from '../../../util';

const animationCurveLinearOutSlowIn = 'cubic-bezier(0,0,.2,1)';

const rippleAnimation = keyframes`
  from {
    transform: scale(-1);
    opacity: 0;
  }
  to {
    transform: scale(2);
    opacity: 0.3;
  }
`;

const isAnimating = css`
  animation: ${rippleAnimation} 0.3s ${animationCurveLinearOutSlowIn} forwards;
`;

export default makeModifier('isAnimating', isAnimating);
