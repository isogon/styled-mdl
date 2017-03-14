import styled, { css } from 'styled-components';
import { getters as g } from '../../util';

export default styled.div`
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
  ${({ shouldAnimate }) => shouldAnimate && css`
    transition: transform .4s ${g.animationCurveLinearOutSlowIn},
                width .4s ${g.animationCurveLinearOutSlowIn},
                height .4s ${g.animationCurveLinearOutSlowIn},
                opacity .8s ${g.animationCurveLinearOutSlowIn};
  `}
`;
