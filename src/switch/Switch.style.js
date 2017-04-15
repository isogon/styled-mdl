import styled, { css } from 'styled-components';

import { materialAnimationDefault, shadow2dp, shadow3dp } from '../mixins';
import { getters as g } from '../util';

export const SwitchWrap = styled.div`
  display: inline-block;
`;

export const SwitchStyle = styled.label`
  position: relative;
  z-index: 1;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: ${g.switchLabelHeight}px;
  margin: 0;
  padding: 0;
  overflow: visible;
  padding-left: ${({ theme }) => theme.switchTrackLength}px;
  -webkit-touch-callout: none;
  user-select: none;
`;

export const SwitchButton = styled.input`
  line-height: ${g.switchLabelHeight}px;
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
    background: ${g.switchTrackColor}
  }
  &:checked ~ div:nth-of-type(2) {
    background: ${g.switchThumbColor};
    left: ${({ theme }) => theme.switchTrackLength - theme.switchThumbSize}px;
    ${shadow3dp()}
  }
`;

export const Track = styled.div`
  background: ${g.switchOffTrackColor};
  position: absolute;
  left: 0;
  top: ${g.switchTrackTop}px;
  height: ${g.switchTrackHeight}px;
  width: ${g.switchTrackLength}px;
  border-radius: ${g.switchTrackHeight}px;
  cursor: pointer;
  ${({ disabled }) => disabled && css`
    border: 2px solid ${g.switchDisabledTrackColor};
    cursor: auto;
  `}
`;

export const Thumb = styled.div`
  background: ${g.switchOffThumbColor};
  position: absolute;
  left: 0;
  top: ${g.switchThumbTop}px;
  height: ${g.switchThumbSize}px;
  width: ${g.switchThumbSize}px;
  border-radius: 50%;
  cursor: pointer;
  ${shadow2dp()}
  ${materialAnimationDefault('0.28s')}
  transition-property: left;
`;

export const SwitchLabel = styled.span`
  position: relative;
  cursor: pointer;
  font-size: ${g.switchLabelFontSize}px;
  line-height: ${g.switchLabelHeight}px;
  margin: 0;
  left: 24px;
  ${({ disabled }) => disabled && css`
    color: ${g.switchDisabledTumbColor};
    cursor: auto;
  `}
`;
