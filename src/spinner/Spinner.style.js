import styled, { css, keyframes } from 'styled-components';
import { setDisplayName } from 'recompose';
import { getters as g } from '../util';

const rotate = keyframes`
  to { transform: rotate(360deg) }
`;

const spinnerArcSize = (scalar) => css`
  transform: rotate(${scalar * 270}deg);
`;

const fillUnfillRotate = keyframes`
  12.5% { ${spinnerArcSize(0.5)} }
  25%   { ${spinnerArcSize(1.0)} }
  37.5% { ${spinnerArcSize(1.5)} }
  50%   { ${spinnerArcSize(2.0)} }
  62.5% { ${spinnerArcSize(2.5)} }
  75%   { ${spinnerArcSize(3.0)} }
  87.5% { ${spinnerArcSize(3.5)} }
  to    { ${spinnerArcSize(4.0)} }
`;
/**
* HACK: Even though the intention is to have the current .mdl-spinner__layer-N
* at `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome
* to do proper subpixel rendering for the elements being animated. This is
* especially visible in Chrome 39 on Ubuntu 14.04. See:
*
* - https://github.com/Polymer/paper-spinner/issues/9
* - https://code.google.com/p/chromium/issues/detail?id=436255
*/
const layer1FadeInOut = keyframes`
  from { opacity: 0.99; }
  25% { opacity: 0.99; }
  26% { opacity: 0; }
  89% { opacity: 0; }
  90% { opacity: 0.99; }
  100% { opacity: 0.99; }
`;
const layer2FadeInOut = keyframes`
  from { opacity: 0; }
  15% { opacity: 0; }
  25% { opacity: 0.99; }
  50% { opacity: 0.99; }
  51% { opacity: 0; }
`;
const layer3FadeInOut = keyframes`
  from { opacity: 0; }
  40% { opacity: 0; }
  50% { opacity: 0.99; }
  75% { opacity: 0.99; }
  76% { opacity: 0; }
`;
const layer4FadeInOut = keyframes`
  from { opacity: 0; }
  65% { opacity: 0; }
  75% { opacity: 0.99; }
  90% { opacity: 0.99; }
  100% { opacity: 0; }
`;
const leftSpin = keyframes`
  from { transform: rotate(130deg); }
  50% { transform: rotate(-5deg); }
  to { transform: rotate(130deg); }
`;
const rightSpin = keyframes`
  from { transform: rotate(-130deg); }
  50% { transform: rotate(5deg); }
  to { transform: rotate(-130deg); }
`;

export const SpinnerStyle = setDisplayName('SpinnerStyle')(styled.div`
  display: inline-block;
  position: relative;
  width: ${g.spinnerSize}px;
  height: ${g.spinnerSize}px;

  ${({ active }) => active && css`
    animation: ${rotate} ${g.spinnerDuration}ms linear infinite;
  `}
`);

export const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const spinnerArcTime = (co) => ({ theme }) =>
  `${theme.spinnerArcTime * co}ms ${theme.animation.fastOutSlowIn} infinite both`;

export const LayerOne = setDisplayName('LayerOne')(Layer.extend`
  border-color: ${({ theme, singleColor }) => (singleColor ? theme.spinnerSingleColor : theme.spinnerColor1)};

  ${({ active }) => active && css`
    animation: ${fillUnfillRotate} ${spinnerArcTime(4)},
               ${layer1FadeInOut} ${spinnerArcTime(4)};
  `}
`);

export const LayerTwo = setDisplayName('LayerTwo')(Layer.extend`
  border-color: ${({ theme, singleColor }) => (singleColor ? theme.spinnerSingleColor : theme.spinnerColor2)};

  ${({ active }) => active && css`
    animation: ${fillUnfillRotate} ${spinnerArcTime(4)},
               ${layer2FadeInOut} ${spinnerArcTime(4)};
  `}
`);

export const LayerThree = setDisplayName('LayerThree')(Layer.extend`
  border-color: ${({ theme, singleColor }) => (singleColor ? theme.spinnerSingleColor : theme.spinnerColor3)};

  ${({ active }) => active && css`
    animation: ${fillUnfillRotate} ${spinnerArcTime(4)},
               ${layer3FadeInOut} ${spinnerArcTime(4)};
  `}
`);

export const LayerFour = setDisplayName('LayerFour')(Layer.extend`
  border-color: ${({ theme, singleColor }) => (singleColor ? theme.spinnerSingleColor : theme.spinnerColor4)};

  ${({ active }) => active && css`
    animation: ${fillUnfillRotate} ${spinnerArcTime(4)},
               ${layer4FadeInOut} ${spinnerArcTime(4)};
  `}
`);

/**
* Patch the gap that appear between the two adjacent
* div.mdl-spinner__circle-clipper while the spinner is rotating
* (appears on Chrome 38, Safari 7.1, and IE 11).
*
* Update: the gap no longer appears on Chrome when .mdl-spinner__layer-N's
* opacity is 0.99, but still does on Safari and IE.
*/
export const GapPatch = setDisplayName('GapPatch')(styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
`);

export const CircleClipper = setDisplayName('CircleClipper')(styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
  ${({ left }) => left && css`float: left;`}
  ${({ right }) => right && css`float: right;`}
`);

export const Circle = setDisplayName('Circle')(styled.div`
  box-sizing: border-box;
  height: 100%;
  border-width: ${g.spinnerStrokeWidth}px;
  border-style: solid;
  border-color: inherit;
  border-bottom-color: transparent !important;
  border-radius: 50%;
  animation: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ left }) => left && css`
    border-right-color: transparent !important;
    transform: rotate(129deg);
    ${({ active }) => active && css`
      animation: ${leftSpin} ${g.spinnerArcTime}ms
                 ${g.animation.fastOutSlowIn} infinite both;
    `}
  `}

  ${({ right }) => right && css`
    left: -100%;
    border-left-color: transparent !important;
    transform: rotate(-129deg);
    ${({ active }) => active && css`
      animation: ${rightSpin} ${g.spinnerArcTime}ms
                 ${g.animation.fastOutSlowIn} infinite both;
    `}
  `}

  ${({ clipper }) => clipper && css`
    width: 200%;
  `}

  ${({ gap }) => gap && css`
    width: 1000%;
    left: -450%;
  `}
`);
