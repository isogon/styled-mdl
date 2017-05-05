import styled, { css } from 'styled-components';

import { getters as g } from '../util';

// TODO: get this working with styled components?
// // Some CSS magic to target only IE.
// _:-ms-input-placeholder, :root .mdl-slider.mdl-slider.is-upgraded {
//   -ms-appearance: none;
//   // The thumb can't overflow the track or the rest of the control in IE, so we
//   // need to make it tall enough to contain the largest version of the thumb.
//   height: 32px;
//   margin: 0;
// }
const percentFilled = ({ value, max, min }) => (value - min) / (max - min);
const percentEmpty = (props) => 1 - percentFilled(props);
const whenLowestValue = (styles) => ({ value, min }) => {
  if (!value || value === min) {
    return css`${styles}`;
  }

  return null;
};

export const SliderInput = styled.input`
  width: calc(100% - 40px);
  min-width: 100px;
  margin: 0 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 2px;
  background: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  outline: 0;
  padding: 0;
  color: ${g.rangeColor};
  align-self: center;
  z-index: 1;
  cursor: pointer;


  // Disable default focus on Firefox.
  &::-moz-focus-outer {
    border: 0;
  }

  // Disable tooltip on IE.
  &::-ms-tooltip {
    display: none;
  }


  /**************************** Tracks ****************************/
  &::-webkit-slider-runnable-track {
    background: transparent;
  }

  &::-moz-range-track {
    background: transparent;
    border: none;
  }

  &::-ms-track {
    background: none;
    color: transparent;
    height: 2px;
    width: 100%;
    border: none;
  }

  &::-ms-fill-lower {
    padding: 0;
    // Margin on -ms-track doesn't work right, so we use gradients on the
    // fills.
    background: linear-gradient(to right,
    transparent,
    transparent 16px,
    ${g.rangeColor} 16px,
    ${g.rangeColor} 0);
  }

  &::-ms-fill-upper {
    padding: 0;
    // Margin on -ms-track doesn't work right, so we use gradients on the
    // fills.
    background: linear-gradient(to left,
    transparent,
    transparent 16px,
    ${g.rangeBgColor} 16px,
    ${g.rangeBgColor} 0);
  }


  /**************************** Thumbs ****************************/
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border-radius: 50%;
    background: ${g.rangeColor};
    border: none;
    transition: transform 0.18s ${g.animationCurveDefault},
    border 0.18s ${g.animationCurveDefault},
    box-shadow 0.18s ${g.animationCurveDefault},
    background 0.28s ${g.animationCurveDefault};
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border-radius: 50%;
    background-image: none;
    background: ${g.rangeColor};
    border: none;
    // -moz-range-thumb doesn't currently support transitions.
  }



  &::-ms-thumb {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: ${g.rangeColor};
    transform: scale(0.375);
    // -ms-thumb doesn't currently support transitions, but leaving this here
    // in case support ever gets added.
    transition: transform 0.18s ${g.animationCurveDefault},
                background 0.28s ${g.animationCurveDefault};
  }


  ${({ focused, active }) => focused && !active && css`
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 10px ${g.rangeFadedColor};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 10px ${g.rangeFadedColor};
    }
    &::-ms-thumb {
      background: radial-gradient(circle closest-side,
      ${g.rangeColor} 0%,
      ${g.rangeColor} 37.5%,
      ${g.rangeFadedColor} 37.5%,
      ${g.rangeFadedColor} 100%);
      transform: scale(1);
    }
  `}

  ${({ active }) => active && css`
    &::-webkit-slider-thumb {
      background-image: none;
      background: ${g.rangeColor};
      transform: scale(1.5);
    }

    &::-moz-range-thumb {
      background-image: none;
      background: ${g.rangeColor};
      transform: scale(1.5);
    }
    &::-ms-thumb {
      background: ${g.rangeColor};
      transform: scale(0.5625);
    }
  `}

  ${whenLowestValue(css`
    &::-webkit-slider-thumb {
      border: 2px solid ${g.rangeBgColor};
      background: transparent;
    }

    &::-moz-range-thumb {
      border: 2px solid ${g.rangeBgColor};
      background: transparent;
    }


    &::-ms-thumb {
      background: radial-gradient(circle closest-side,
      transparent 0%,
      transparent 66.67%,
      ${g.rangeBgColor} 66.67%,
      ${g.rangeBgColor} 100%);
    }


    ${({ focused, active }) => focused && !active && css`

      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 10px ${g.rangeBgFocusColor};
        background: ${g.rangeBgFocusColor};
      }

      &::-moz-range-thumb {
        box-shadow: 0 0 0 10px ${g.rangeBgFocusColor};
        background: ${g.rangeBgFocusColor};
      }
      &::-ms-thumb {
        background: radial-gradient(circle closest-side,
        ${g.rangeBgFocusColor} 0%,
        ${g.rangeBgFocusColor} 25%,
        ${g.rangeBgColor} 25%,
        ${g.rangeBgColor} 37.5%,
        ${g.rangeBgFocusColor} 37.5%,
        ${g.rangeBgFocusColor} 100%);
        transform: scale(1);
      }
    `}
    ${({ active }) => active && css`
      &::-webkit-slider-thumb {
        border: 1.6px solid ${g.rangeBgColor};
        transform: scale(1.5);
      }

      &::-moz-range-thumb {
        border: 1.5px solid ${g.rangeBgColor};
        transform: scale(1.5);
      }
      &::-ms-thumb {
        transform: scale(0.5625);
        background: radial-gradient(circle closest-side,
        transparent 0%,
        transparent 77.78%,
        ${g.rangeBgColor} 77.78%,
        ${g.rangeBgColor} 100%);
      }
    `}
    &::-ms-fill-lower {
      background: transparent;
    }

    &::-ms-fill-upper {
      margin-left: 6px;
    }

    &:active::-ms-fill-upper {
      margin-left: 9px;
    }

    ${({ disabled }) => disabled && css`
      &::-webkit-slider-thumb {
        border: 3px solid ${g.rangeBgColor};
        background: transparent;
        transform: scale(0.667);
      }
      &::-moz-range-thumb {
        border: 3px solid ${g.rangeBgColor};
        background: transparent;
        transform: scale(0.667);
      }
      &::-ms-thumb {
        transform: scale(0.25);
        background: radial-gradient(circle closest-side,
        transparent 0%,
        transparent 50%,
        ${g.rangeBgColor} 50%,
        ${g.rangeBgColor} 100%);
      }
      ${({ active }) => active && css`
        &::-ms-fill-upper {
          margin-left: 6px;
        }
      `}
    `}
  `)}
  ${({ disabled }) => disabled && css`
    &::-webkit-slider-thumb {
      transform: scale(0.667);
      background: ${g.rangeBgColor};
    }

    &::-moz-range-thumb {
      transform: scale(0.667);
      background: ${g.rangeBgColor};
    }

    &::-ms-thumb {
      transform: scale(0.25);
      background: ${g.rangeBgColor};
    }

    &::-ms-fill-lower {
      margin-right: 6px;
      background: linear-gradient(to right,
      transparent,
      transparent 25px,
      ${g.rangeBgColor} 25px,
      ${g.rangeBgColor} 0);
    }

    &::-ms-fill-upper {
      margin-left: 6px;
    }
  `}
`;

// Since we need to specify a height of 32px in IE, we add a class here for a
// container that brings it back to a reasonable height.
export const SliderBackgroundIEContainer = styled.div`
  height: 18px;
  overflow: visible;
  border: none;
  margin: none;
  padding: none;
`;

// We use a set of divs behind the track to style it in all non-IE browsers.
// This one contains both the background and the slider.
export const SliderContainer = styled.div`
  height: 18px;
  position: relative;
  background: none;
  display: flex;
  flex-direction: row;
`;

// This one sets up a flex box for the styled upper and lower portions of the
// the slider track.
export const SliderBackgroundFlex = styled.div`
  background: transparent;
  position: absolute;
  height: 2px;
  width: calc(100% - 52px);
  top: 50%;
  left: 0;
  margin: 0 26px;
  display: flex;
  overflow: hidden;
  border: 0;
  padding: 0;
  transform: translate(0, -1px);
  ${whenLowestValue(css`
  `)}
`;

// This one styles the lower part of the slider track.
export const SliderBackgroundLower = styled.div`
  background: ${g.rangeColor};
  flex: ${percentFilled} 1 0%;
  position: relative;
  border: 0;
  padding: 0;
  ${({ disabled }) => disabled && css`
    background-color: ${g.rangeBgColor};
    left: -6px;
  `}
`;

// This one styles the upper part of the slider track.
export const SliderBackgroundUpper = styled.div`
  background: ${g.rangeBgColor};
  flex: ${percentEmpty} 1 0%;
  position: relative;
  border: 0;
  padding: 0;
  transition: left 0.18s ${g.animationCurveDefault}
  ${whenLowestValue(css`
    left: 6px;
    ${({ active }) => active && css`
      left: 9px;
      ${({ disabled }) => disabled && css`
        left: 6px;
      `}
    `}
  `)}
  ${({ disabled }) => disabled && css`
    left: 6px;
  `}
`;
