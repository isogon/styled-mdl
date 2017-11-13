import { setDisplayName } from 'recompose';
import styled, { css } from 'styled-components';

import { getters as g } from '../util';
import { typoButton, shadow2dp, shadow4dp, focusShadow } from '../mixins';

const { button } = g;

export const StyledButton = setDisplayName('Button')(styled.button`
  background: transparent;
  border: none;
  border-radius: ${button.borderRadius}px;
  color: ${button.secondaryColor};
  position: relative;
  height: ${button.height}px;
  line-height: ${button.height}px;
  margin: 0;
  min-width: ${button.minWidth}px;
  padding: 0 ${button.padding}px;
  white-space: nowrap;
  display: inline-flex;
  ${typoButton()} overflow: hidden;
  will-change: box-shadow;
  text-decoration: none;
  transition: box-shadow 0.2s ${g.animation.fastOutLinearIn},
    background-color 0.2s ${g.animation.default},
    color 0.2s ${g.animation.default};
  outline: none;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  &::-moz-focus-inner {
    border: 0;
  }
  &:hover {
    background-color: ${button.hoverColor};
  }
  &:focus:not(:active) {
    background-color: ${button.focusColor};
  }
  &:active {
    background-color: ${button.activeColor};
  }
  ${({ colored }) =>
    colored &&
    css`
      color: ${button.primaryColorAlt};
      &:focus:not(:active) {
        background-color: ${button.focusColorAlt};
      }
    `} ${({ raised }) =>
      raised &&
      css`
        background: ${button.primaryColor};
        ${shadow2dp()} &:active {
          ${shadow4dp()} background-color: ${button.activeColor};
        }

        &:focus:not(:active) {
          ${focusShadow()} background-color: ${button.activeColor};
        }

        ${({ colored }) =>
          colored &&
          css`
            background: ${button.primaryColorAlt};
            color: ${button.secondaryColorAlt};

            &:hover {
              background-color: ${button.hoverColorAlt};
            }

            &:active {
              background-color: ${button.activeColorAlt};
            }

            &:focus:not(:active) {
              background-color: ${button.activeColorAlt};
            }
          `};
      `} ${({ fab }) =>
      fab &&
      css`
        border-radius: 50%;
        font-size: ${button.fabFontSize}px;
        height: ${button.fabSize}px;
        margin: auto;
        min-width: ${button.fabSize}px;
        width: ${button.fabSize}px;
        padding: 0;
        overflow: hidden;
        background: ${button.primaryColor};
        ${shadow2dp()} position: relative;
        line-height: normal;

        ${({ mini }) =>
          mini &&
          css`
            height: ${button.fabSizeMini}px;
            min-width: ${button.fabSizeMini}px;
            width: ${button.fabSizeMini}px;
          `} &:active {
          ${shadow4dp()} background-color: ${button.activeColor};
        }

        &:focus:not(:active) {
          ${focusShadow()} background-color: ${button.activeColor};
        }

        ${({ colored }) =>
          colored &&
          css`
            background: ${button.fabColorAlt};
            color: ${button.fabTextColorAlt};

            &:hover {
              background-color: ${button.fabHoverColorAlt};
            }

            &:focus:not(:active) {
              background-color: ${button.fabActiveColorAlt};
            }

            &:active {
              background-color: ${button.fabActiveColorAlt};
            }
          `};
      `} ${({ icon }) =>
      icon &&
      css`
        border-radius: 50%;
        font-size: ${button.fabFontSize}px;
        height: ${button.iconSize}px;
        margin-left: 0;
        margin-right: 0;
        min-width: ${button.iconSize}px;
        width: ${button.iconSize}px;
        padding: 0;
        overflow: hidden;
        color: inherit;
        line-height: normal;

        ${({ mini }) =>
          mini &&
          css`
            height: ${button.iconSizeMini}px;
            min-width: ${button.iconSizeMini}px;
            width: ${button.iconSizeMini}px;
          `};
      `} ${({ primary }) =>
      primary &&
      css`
        color: ${button.primaryColorAlt};
        ${({ raised, fab }) =>
          (raised || fab) &&
          css`
            color: ${button.secondaryColorAlt};
            background-color: ${button.primaryColorAlt};
            &:hover,
            &:active,
            &:focus:not(:active) {
              background-color: ${button.primaryColorAlt};
            }
          `};
      `} ${({ accent }) =>
      accent &&
      css`
        color: ${button.fabColorAlt};
        ${({ raised, fab }) =>
          (raised || fab) &&
          css`
            color: ${button.fabTextColorAlt};
            background-color: ${button.fabColorAlt};
            &:hover,
            &:active,
            &:focus:not(:active) {
              background-color: ${button.fabColorAlt};
            }
          `};
      `} ${({ disabled }) =>
      disabled &&
      css`
        color: ${button.secondaryColorDisabled};
        cursor: default;
        background-color: transparent;
        &:hover {
          background-color: transparent;
        }
        ${({ fab }) =>
          fab &&
          css`
            background-color: ${button.primaryColorDisabled};
            color: ${button.secondaryColorDisabled};
            &:hover,
            &:active,
            &:focus:not(:active) {
              background-color: ${button.primaryColorDisabled};
              ${shadow2dp()};
            }
          `} ${({ colored }) =>
            colored &&
            css`
              color: ${button.secondaryColorDisabled};
              &:hover,
              &:active,
              &:focus:not(:active) {
                color: ${button.secondaryColorDisabled};
              }
            `} ${({ raised }) =>
            raised &&
            css`
              background-color: ${button.primaryColorDisabled};
              color: ${button.secondaryColorDisabled};
              box-shadow: none;
              &:hover,
              &:active,
              &:focus:not(:active) {
                color: ${button.secondaryColorDisabled};
                background-color: ${button.primaryColorDisabled};
              }
            `};
      `};
`);

export const ButtonInner = setDisplayName('ButtonInner')(styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`);
