import { ifProp } from 'styled-tools';
import { setDisplayName } from 'recompose';
import styled, { css } from 'styled-components';

import { getters } from '../util';

const { card } = getters;

export const CardActions = setDisplayName('CardActions')(styled.div`
  font-size: ${card.actionsFontSize}px;
  line-height: normal;
  width: 100%;
  background-color: rgba(0,0,0,0);
  padding: 8px;
  box-sizing: border-box;
  ${ifProp('border', css`
    border-top: 1px solid ${card.borderColor};
  `)}
`);
