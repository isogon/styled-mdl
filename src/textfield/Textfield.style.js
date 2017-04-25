import styled, { css } from 'styled-components';
import { getters as g } from '../util';
import { materialAnimationDefault } from '../mixins';

// The container for the whole component.
export const TextfieldBase = styled.div`
  position: relative;
  font-size: ${g.inputTextFontSize}px;
  display: inline-block;
  box-sizing: border-box;
  width: 300px;
  max-width: 100%;
  margin: 0;
  padding: ${g.inputTextVerticalSpacing}px 0;
  ${({ alignRight }) => alignRight && css`
    text-align: right;
  `}
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  ${({ expandable }) => expandable && css`
    min-width: ${g.inputTextButtonSize}px;
    width: auto;
    min-height: ${g.inputTextButtonSize}px;
  `}
`;

// Styling for the input element.
export const inputStyles = css`
  border: none;
  border-bottom: 1px solid ${g.inputTextBottomBorderColor};
  display: block;
  font-size: ${g.inputTextFontSize}px;
  font-family: ${g.performanceFont}px;
  margin: 0;
  padding: ${g.inputTextPadding}px 0;
  width: ${g.inputTextWidth};
  background: none;
  text-align: left;
  color: inherit;

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ focused }) => focused && css`
    outline: none;
  `}

  ${({ invalid, error }) => invalid || error && css`
    border-color: ${g.inputTextErrorColor};
    box-shadow: none;
  `}

  ${({ disabled }) => disabled && css`
    background-color: transparent;
    border-bottom: 1px dotted ${g.inputTextDisabledColor};
    color: ${g.inputTextDisabledTextColor};
  `}
`;

export const Input = styled.input`${inputStyles}`;
export const Textarea = styled.textarea`
  ${inputStyles}
  display: block;
`;

// Styling for the label / floating label.
export const Label = styled.label`
  bottom: 0;
  color: ${g.inputTextLabelColor};
  font-size: ${g.inputTextFontSize}px;
  left: 0;
  right: 0;
  pointer-events: none;
  position: absolute;
  display: block;
  top: ${({ theme }) => theme.inputTextPadding + theme.inputTextVerticalSpacing}px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;

  // The after label is the colored underline for the TextField.
  &:after {
    background-color: ${g.inputTextHighlightColor};
    bottom: ${g.inputTextVerticalSpacing}px;
    content: '';
    height: 2px;
    left: 45%;
    position: absolute;
    ${materialAnimationDefault()}
    visibility: hidden;
    width: 10px;
    ${({ focused }) => focused && css`
      left: 0;
      visibility: visible;
      width: 100%;
    `}
    ${({ invalid, error }) => invalid || error && css`
      background-color: ${g.inputTextErrorColor};
    `}
  }

  ${({ value, placeholder }) => value || (placeholder && css`
    visibility: hidden;
  `)}

  ${({ label }) => label && css`
    ${materialAnimationDefault()}

    ${({ placeholder }) => placeholder && css`
      transition: none;
    `}

    ${({ focused, placeholder, value, theme }) => (focused || placeholder || value) && css`
      color: ${g.inputTextHighlightColor};
      font-size : ${g.inputTextFloatingLabelFontsize}px;
      top: ${theme.inputTextVerticalSpacing - (theme.inputTextFloatingLabelFontsize + theme.inputTextPadding)}px;
      visibility: visible;
    `}

    ${({ invalid, error, theme }) => invalid || error && css`
      color: ${g.inputTextErrorColor};
      top: ${theme.inputTextVerticalSpacing - (theme.inputTextFloatingLabelFontsize + theme.inputTextPadding)}px;
      font-size: ${g.inputTextFloatingLabelFontsize}px;
    `}
  `}

  ${({ disabled }) => disabled && css`
    color: ${g.inputTextDisabledTextColor};
  `}
`;

// TextField Error.
export const ErrorMessage = styled.div`
  color: ${g.inputTextErrorColor};
  position: absolute;
  font-size: ${g.inputTextFloatingLabelFontsize}px;
  margin-top: 3px;
  display: block;
`;

export const ExpandableHolder = styled.div`
  display: inline-block;
  position: relative;
  margin-left: ${g.inputTextButtonSize};

  ${materialAnimationDefault()};
  display: inline-block;

  // Safari (possibly others) need to be convinced that this field is actually
  // visible, otherwise it cannot be tabbed to nor focused via a <label>.
  // TODO: In some cases (Retina displays), this is big enough to render the
  // inner element :(
  max-width: 0.1px;

  ${({ focused, value }) => (focused || value) && css`
    // This is an unfortunate hack. Animating between widths in percent (%)
    // in many browsers (Chrome, Firefox) only animates the inner visual style
    // of the input - the outer bounding box still 'jumps'.
    // Thus assume a sensible maximum, and animate to/from that value.
    max-width: 600px;
  `}

  .mdl-textfield__label:after {
    bottom: 0;
  }
  ${({ label, theme }) => label && css`
    ${({ focused, placeholder, value }) => (focused || placeholder || value) && css`
      top: ${-(theme.inputTextFloatingLabelFontsize + theme.inputTextPadding)}px;
    `}
  `}
`;
