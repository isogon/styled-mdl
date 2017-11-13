import { ifProp } from 'styled-tools';
import { setDisplayName } from 'recompose';
import styled, { css } from 'styled-components';

import { getters } from '../util';

const { card } = getters;

export const Card = setDisplayName('Card')(styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${card.fontSize}px;
  font-weight: 400;
  min-height: ${card.height}px;
  overflow: hidden;
  width: ${card.width}px;
  z-index: ${card.zIndex};
  position: relative;
  background: ${card.backgroundColor};
  border-radius: 2px;
  box-sizing: border-box;
  ${ifProp('expand', css`
    flex-grow: 1;
  `)}
`);
