import styled, { css } from 'styled-components';
import { cond, prop, always, T } from 'lodash/fp';

import { getters as g, rgba } from '../util';

export const Effect = styled.div.attrs({
  color: cond([
    [prop('dark'), always('rgba(0,0,0,.3)')],
    [prop('colored'), ({ theme }) => rgba(theme.colorPrimary, 0.5)],
    [prop('accent'), ({ theme }) => rgba(theme.colorAccent, 0.5)],
    [T, always('white')],
  ]),
})`
  background-color: ${prop('color')};
  border-radius: 50%;
  transform: 'none';
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition-duration: 0.6s, 0.6s, 0.6s, 1.2s;
  transition-timing-function: ${g.animationCurveLinearOutSlowIn};
`;

Effect.displayName = 'Effect';

export const WrapStyle = css`
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
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
  `}
`;
