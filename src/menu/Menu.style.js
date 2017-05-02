import styled, { css } from 'styled-components';

import { shadow2dp, typoBody1 } from '../mixins';
import { getters as g } from '../util';

export const MenuControlWrap = styled.div`
  position: relative;
`;

export const MenuContainer = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  position: fixed;
  overflow: visible;
  height: 0;
  width: 0;
  visibility: hidden;
  z-index: -1;
  ${({ isVisible }) => isVisible && css`
    z-index: 999;
    visibility: visible;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
  `}
`;

export const MenuOutline = styled.div`
  display: block;
  background: ${g.defaultDropdownBgColor};
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: 0;
  transform: scale(0);
  transform-origin: 0 0;
  ${shadow2dp()}
  will-change: transform;
  transition: transform ${g.menuExpandDuration}s ${g.animationCurveDefault},
              opacity ${g.menuFadeDuration}s ${g.animationCurveDefault};
  z-index: -1;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    transform: scale(1);
    z-index: 999;
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
  `}

  ${({ bottomRight }) => bottomRight && css`
    transform-origin: 100% 0;
  `}

  ${({ topLeft }) => topLeft && css`
    transform-origin: 0 100%;
  `}

  ${({ topRight }) => topRight && css`
    transform-origin: 100% 100%;
  `}

  ${({ bottomLeft }) => bottomLeft && css`
    transform-origin: 0 0;
  `}
`;

export const MenuBase = styled.div`
  position: absolute;
  list-style: none;
  top: 0;
  left: 0;
  height: auto;
  width: auto;
  min-width: 124px;
  box-sizing: border-box;
  padding: 8px 0;
  margin: 0;
  opacity: 0;
  clip: rect(0 0 0 0);
  z-index: -1;
  transition: opacity ${g.menuFadeDuration}s ${g.animationCurveDefault},
              clip ${g.menuExpandDuration}s ${g.animationCurveDefault};

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    clip: ${({ height, width }) => `rect(0px ${width}px ${height}px 0px)`};
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    z-index: 999;
  `}

  ${({ bottomRight }) => bottomRight && css`
    left: auto;
    right: 0;
  `}

  ${({ topLeft }) => topLeft && css`
    top: auto;
    bottom: 0;
  `}

  ${({ topRight }) => topRight && css`
    top: auto;
    left: auto;
    bottom: 0;
    right: 0;
  `}

  ${({ bottomLeft }) => bottomLeft && css`
    top: auto;
    left: auto;
  `}
`;

export const MenuDivider = styled.hr`
  border-bottom: 1px solid ${g.defaultItemDividerColor};
  margin: 0;
  opacity: 0;
  height: 0;
  border-top: 0;
  transition: opacity ${g.menuFadeDuration}s ${g.animationCurveDefault};
  transition-delay: ${({ getTransitionDelay, theme }) => getTransitionDelay(theme.menuExpandDuration)}s;
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
  `}
`;

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  border: none;
  color: ${g.defaultItemTextColor};
  background-color: transparent;
  text-align: left;
  margin: 0;
  padding: 0 16px;
  outline-color: ${g.defaultItemOutlineColor};
  position: relative;
  overflow: hidden;
  ${typoBody1()}
  text-decoration: none;
  cursor: pointer;
  height: 48px;
  line-height: 48px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity ${g.menuFadeDuration}s ${g.animationCurveDefault};
  transition-delay: ${({ getTransitionDelay, theme }) => getTransitionDelay(theme.menuExpandDuration)}s;
  user-select: none;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
  `}

  &::-moz-focus-inner {
    border: 0;
  }

  ${({ disabled }) => disabled && css`
    color: ${g.disabledItemTextColor};
    background-color: transparent;
    cursor: auto;

    &:hover {
      background-color: transparent;
    }

    &:focus {
      background-color: transparent;
    }
  `}

  &:hover {
    background-color: ${g.defaultItemHoverBgColor};
  }

  &:focus {
    outline: none;
    background-color: ${g.defaultItemFocusBgColor};
  }

  &:active {
    background-color: ${g.defaultItemActiveBgColor};
  }
`;
