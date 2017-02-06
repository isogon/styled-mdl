import styled, { css } from 'styled-components';

export function makeModifier(prop, modifier) {
  return function getModifier(props) {
    return props[prop] ? modifier : null;
  };
}

export function composeStyled(element, base, ...modifiers) {
  return styled(element)`${
    modifiers.length
      ? modifiers.reduce((mods, modifier) => css`${mods} ${modifier}`, base)
      : base
  }`;
}
