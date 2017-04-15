import styled, { css } from 'styled-components';

import { materialAnimationDefault } from '../mixins';
import { getters as g } from '../util';

export const RadioStyle = styled.label`
  position: relative;
  font-size: ${g.radioLabelFontSize}px;
  line-height: ${g.radioLabelHeight}px;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  height: ${g.radioLabelHeight}px;
  margin: 0;
  padding-left: ${({ theme }) => theme.radioButtonSize + theme.radioPadding}px;
`;

export const RadioButton = styled.input`
  line-height: ${g.radioLabelHeight}px;
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  -ms-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  &:checked ~ div:first-of-type {
    border: 2px solid ${g.radioColor};
  }
  &:checked ~ div:nth-of-type(2) {
    transform: scale(1, 1);
  }
`;

export const OuterCircle = styled.div`
  position: absolute;
  top: ${g.radioTopOffset}px;
  left: 0;
  display: inline-block;
  box-sizing: border-box;
  width: ${g.radioButtonSize}px;
  height: ${g.radioButtonSize}px;
  margin: 0;
  cursor: pointer;
  border: 2px solid ${g.radioOffColor};
  border-radius: 50%;
  z-index: 2;

  ${({ disabled }) => disabled && css`
    border: 2px solid ${g.radioDisabledColor};
    cursor: auto;
  `}
`;

export const InnerCircle = styled.div`
  position: absolute;
  z-index: 1;
  margin: 0;
  top: ${({ theme }) => theme.radioTopOffset + theme.radioInnerMargin}px;
  left: ${g.radioInnerMargin}px;
  box-sizing: border-box;
  width: ${({ theme }) => theme.radioButtonSize - theme.radioInnerMargin * 2}px;
  height: ${({ theme }) => theme.radioButtonSize - theme.radioInnerMargin * 2}px;
  cursor: pointer;
  ${materialAnimationDefault('0.28s')}
  transition-property: transform;
  transform: scale(0, 0);
  border-radius: 50%;
  background: ${g.radioColor};

  ${({ disabled }) => disabled && css`
    background: ${g.radioDisabledColor};
    cursor: auto;
  `}

  ${({ focused }) => focused && css`
    box-shadow: 0 0 0px 10px rgba(0, 0, 0, 0.1);
  `}
`;

export const RadioLabel = styled.span`
  cursor: pointer;

  ${({ disabled }) => disabled && css`
    color: ${g.radioDisabledColor};
    cursor: auto;
  `}
`;

export const RadioRippleWrap = styled.div`
  position: absolute;
  z-index: 2;
  top: ${({ theme }) => -((theme.radioRippleSize - theme.radioLabelHeight) / 2)}px;
  left: ${({ theme }) => -((theme.radioRippleSize - theme.radioButtonSize) / 2)}px;
  box-sizing: border-box;
  width: ${g.radioRippleSize}px;
  height: ${g.radioRippleSize}px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);

  & .mdl-ripple {
    background: ${g.radioColor};
  }

  ${({ disabled }) => disabled && css`
    cursor: auto;
    & .mdl-ripple {
      background: transparent;
    }
  `}
`;
