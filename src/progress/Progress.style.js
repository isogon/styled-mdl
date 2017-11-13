import { setDisplayName } from 'recompose';
import styled, { css, keyframes } from 'styled-components';

import { getters as g } from '../util';

const indeterminate1 = keyframes`
  0% {
    left: 0%;
    width: 0%;
  }
  50% {
    left: 25%;
    width: 75%;
  }
  75% {
    left: 100%;
    width: 0%;
  }
`;

const indeterminate2 = keyframes`
  0% {
    left: 0%;
    width: 0%;
  }
  50% {
    left: 0%;
    width: 0%;
  }
  75% {
    left: 0%;
    width: 25%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
`;

export const ProgressBaseStyle = setDisplayName('ProgressBaseStyle')(styled.div`
  display: block;
  position: relative;
  height: ${g.barHeight}px;
  max-width: 100%;
  width: ${({ width }) => width || '500px'};
`);

const Bar = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0%;
  transition: width 0.2s ${g.animation.default};
`;

export const ProgressBar = setDisplayName('ProgressBar')(Bar.extend`
  background-color: ${g.progressMainColor};
  z-index: 1;
  left: 0;
  ${({ indeterminate }) => indeterminate && css`
    background-color: ${g.progressMainColor};
    animation-name: ${indeterminate1};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `}
  ${({ percent }) => percent && css`
    width: ${percent};
  `}
`);

export const BufferBar = setDisplayName('BufferBar')(Bar.extend`
  background-image:
    linear-gradient(to right, ${g.progressSecondaryColor}, ${g.progressSecondaryColor}),
    linear-gradient(to right, ${g.progressMainColor}, ${g.progressMainColor});
  z-index: 0;
  left: 0;
  width: 100%;
`);

export const AuxBar = setDisplayName('AuxBar')(Bar.extend`
  right: 0;
  ${({ indeterminate }) => indeterminate && css`
      background-image:
        linear-gradient(to right, ${g.progressSecondaryColor}, ${g.progressSecondaryColor}),
        linear-gradient(to right,${g.progressMainColor}, ${g.progressMainColor});
      animation-name: ${indeterminate2};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
  `}
`);
