import { setDisplayName } from 'recompose'
import styled, { css } from 'styled-components'

import { getters as g } from '../../util'
import { mask, bg } from './images'
import { materialAnimationDefault } from '../../mixins'

export const CheckboxWrap = setDisplayName('CheckboxWrap')(styled.label`
  position: relative;
  font-size: ${g.radioLabelFontSize}px;
  line-height: ${g.radioLabelHeight}px;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  height: ${g.radioLabelHeight}px;
  margin: 0;
  padding-left: ${({ theme }) => theme.radioButtonSize + theme.radioPadding}px;
`)

export const CheckboxButton = setDisplayName('CheckboxButton')(styled.input`
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
    border: 2px solid ${g.checkboxColor};
  }
  &:checked ~ div > div {
    background-color: ${g.checkboxColor};
    background-image: url(${bg});
  }
`)

export const BoxOutline = setDisplayName('BoxOutline')(styled.div`
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
  border: 2px solid ${g.checkboxOffColor};
  border-radius: 2px;
  z-index: 2;
  ${({ disabled }) =>
    disabled &&
    css`
      border: 2px solid ${g.checkboxDisabledColor};
      cursor: auto;
    `};
`)

export const TickOutline = setDisplayName('TickOutline')(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: scale(1.01);
  mask: url(${mask});
  background: transparent;
  transition-property: background;
  ${materialAnimationDefault('0.28s')}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${g.checkboxDisabledColor};
    `};
`)

export const CheckboxLabel = setDisplayName('CheckboxLabel')(styled.span`
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${g.checkboxDisabledColor};
      cursor: auto;
    `};
`)
