import styled, { css } from 'styled-components';
import { getters as g } from '../../util';

export default styled.div`
  background: #fff;
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  transform: ${({ transform }) => transform};
  opacity: ${({ opacity }) => opacity};
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  ${({ shouldAnimate }) => shouldAnimate && css`
    transition: transform .3s ${g.animationCurveLinearOutSlowIn},
                width .3s ${g.animationCurveLinearOutSlowIn},
                height .3s ${g.animationCurveLinearOutSlowIn},
                opacity .6s ${g.animationCurveLinearOutSlowIn};
  `}
`;
