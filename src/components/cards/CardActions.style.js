import styled, { css } from 'styled-components';
import { setDisplayName } from 'recompose';
import { getters as g } from '../../util';

export const CardActions = setDisplayName('CardActions')(styled.div`
  font-size: ${g.cardActionsFontSize}px;
  line-height: normal;
  width: 100%;
  background-color: rgba(0,0,0,0);
  padding: 8px;
  box-sizing: border-box;
  ${({ border }) => border && css`
    border-top: 1px solid ${g.cardBorderColor};
  `}
`);
