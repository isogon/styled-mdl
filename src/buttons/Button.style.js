import styled, { css } from 'styled-components';
import { getters as g } from '../util';
import { typoButton, shadow2dp, shadow4dp, focusShadow } from '../mixins';

const base = css`
  background: transparent;
  border: none;
  border-radius: ${g.buttonBorderRadius}px;
  color: ${g.buttonSecondaryColor};
  position: relative;
  height: ${g.buttonHeight}px;
  line-height: ${g.buttonHeight}px;
  margin: 0;
  min-width: ${g.buttonMinWidth}px;
  padding: 0 ${g.buttonPadding}px;
  white-space: nowrap;
  display: inline-flex;
  ${typoButton()}
  overflow: hidden;
  will-change: box-shadow;
  transition: box-shadow 0.2s ${g.animationCurveFastOutLinearIn},
              background-color 0.2s ${g.animationCurveDefault},
              color 0.2s ${g.animationCurveDefault};
  outline: none;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  &::-moz-focus-inner { border: 0; }
  &:hover { background-color: ${g.buttonHoverColor} }
  &:focus:not(:active) { background-color: ${g.buttonFocusColor} }
  &:active { background-color: ${g.buttonActiveColor} }
`;

const mods = css`
  ${({ colored }) => colored && css`
    color: ${g.buttonPrimaryColorAlt};
    &:focus:not(:active) {
      background-color: ${g.buttonFocusColorAlt};
    }
  `}
  ${({ raised }) => raised && css`
    background: ${g.buttonPrimaryColor};
    ${shadow2dp()}

    &:active {
      ${shadow4dp()}
      background-color: ${g.buttonActiveColor};
    }

    &:focus:not(:active) {
      ${focusShadow()}
      background-color: ${g.buttonActiveColor};
    }

    ${({ colored }) => colored && css`
      background: ${g.buttonPrimaryColorAlt};
      color: ${g.buttonSecondaryColorAlt};

      &:hover {
        background-color: ${g.buttonHoverColorAlt};
      }

      &:active {
        background-color: ${g.buttonActiveColorAlt};
      }

      &:focus:not(:active) {
        background-color: ${g.buttonActiveColorAlt};
      }
    `}
  `}
  ${({ fab }) => fab && css`
    border-radius: 50%;
    font-size: ${g.buttonFabFontSize}px;
    height: ${g.buttonFabSize}px;
    margin: auto;
    min-width: ${g.buttonFabSize}px;
    width: ${g.buttonFabSize}px;
    padding: 0;
    overflow: hidden;
    background: ${g.buttonPrimaryColor};
    ${shadow2dp()}
    position: relative;
    line-height: normal;

    ${({ mini }) => mini && css`
      height: ${g.buttonFabSizeMini}px;
      min-width: ${g.buttonFabSizeMini}px;
      width: ${g.buttonFabSizeMini}px;
    `}

    &:active {
      ${shadow4dp()}
      background-color: ${g.buttonActiveColor};
    }

    &:focus:not(:active) {
      ${focusShadow()}
      background-color: ${g.buttonActiveColor};
    }

    ${({ colored }) => colored && css`
      background: ${g.buttonFabColorAlt};
      color: ${g.buttonFabTextColorAlt};

      &:hover {
        background-color: ${g.buttonFabHoverColorAlt};
      }

      &:focus:not(:active) {
        background-color: ${g.buttonFabActiveColorAlt};
      }

      &:active {
        background-color: ${g.buttonFabActiveColorAlt};
      }
    `}
  `}
  ${({ icon }) => icon && css`
    border-radius: 50%;
    font-size: ${g.buttonFabFontSize}px;
    height: ${g.buttonIconSize}px;
    margin-left: 0;
    margin-right: 0;
    min-width: ${g.buttonIconSize}px;
    width: ${g.buttonIconSize}px;
    padding: 0;
    overflow: hidden;
    color: inherit;
    line-height: normal;

    ${({ mini }) => mini && css`
      height: ${g.buttonIconSizeMini}px;
      min-width: ${g.buttonIconSizeMini}px;
      width: ${g.buttonIconSizeMini}px;
    `}
  `}
  ${({ primary }) => primary && css`
    color: ${g.buttonPrimaryColorAlt};
    ${({ raised, fab }) => (raised || fab) && css`
      color: ${g.buttonSecondaryColorAlt};
      background-color: ${g.buttonPrimaryColorAlt};;
      &:hover, &:active, &:focus:not(:active) {
        background-color: ${g.buttonPrimaryColorAlt};
      }
    `}
  `}
  ${({ accent }) => accent && css`
    color: ${g.buttonFabColorAlt};
    ${({ raised, fab }) => (raised || fab) && css`
      color: ${g.buttonFabTextColorAlt};
      background-color: ${g.buttonFabColorAlt};
      &:hover, &:active, &:focus:not(:active) {
        background-color: ${g.buttonFabColorAlt};
      }
    `}
  `}
  ${({ disabled }) => disabled && css`
    color: ${g.buttonSecondaryColorDisabled};
    cursor: default;
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
    ${({ fab }) => fab && css`
      background-color: ${g.buttonPrimaryColorDisabled};
      color: ${g.buttonSecondaryColorDisabled};
      &:hover, &:active, &:focus:not(:active) {
        background-color: ${g.buttonPrimaryColorDisabled};
        ${shadow2dp()}
      }
    `}
    ${({ colored }) => colored && css`
      color: ${g.buttonSecondaryColorDisabled};
      &:hover, &:active, &:focus:not(:active) {
        color: ${g.buttonSecondaryColorDisabled};
      }
    `}
    ${({ raised }) => raised && css`
      background-color: ${g.buttonPrimaryColorDisabled};
      color: ${g.buttonSecondaryColorDisabled};
      box-shadow: none;
      &:hover, &:active, &:focus:not(:active) {
        color: ${g.buttonSecondaryColorDisabled};
        background-color: ${g.buttonPrimaryColorDisabled};
      }
    `}
  `}
`;

export default styled.button`${base}${mods}`;
