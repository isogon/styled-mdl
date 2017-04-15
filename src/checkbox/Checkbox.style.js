import styled, { css } from 'styled-components';

import { materialAnimationDefault } from '../mixins';
import { getters as g } from '../util';
import { mask, bg } from './images';

export const CheckboxStyle = styled.label`
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

export const CheckboxButton = styled.input`
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
  &:checked ~ div {
    border: 2px solid ${g.radioColor};
  }
  &:checked ~ div > div {
    background-color: ${g.radioColor};
    background-image: url(${bg});
  }
`;

export const BoxOutline = styled.div`
  position: absolute;
  top: ${g.radioTopOffset}px;
  left: 0;
  display: inline-block;
  box-sizing: border-box;
  width: ${g.radioButtonSize}px;
  height: ${g.radioButtonSize}px;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid ${g.radioOffColor};
  border-radius: 2px;
  z-index: 2;
  ${({ disabled }) => disabled && css`
    border: 2px solid ${g.radioDisabledColor};
    cursor: auto;
  `}
`;

export const TickOutline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  mask: url(${mask});
  background: transparent;
  ${materialAnimationDefault('0.28s')}
  transition-property: background;

  ${({ disabled }) => disabled && css`
    background-color: ${g.radioDisabledColor};
  `}
`;

export const CheckboxLabel = styled.span`
  cursor: pointer;

  ${({ disabled }) => disabled && css`
    color: ${g.radioDisabledColor};
    cursor: auto;
  `}
`;
