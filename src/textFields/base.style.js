import { css } from 'styled-components';
import { getters as g } from '../util';

export default css`
  border: none;
  border-bottom: ${g.border}px solid ${g.transparent};
  color: ${g.fg};
  display: flex;
  font-size: ${g.size}px;
  margin: 1em .5em;
  padding: ${(p) => g.border(p) * 2}px 0;
  width: 100%;
  text-align: left;
  transition: border-bottom .2s;
  &:focus {
    border-bottom: ${g.border}px solid ${g.shadowDark};
    outline: 0;
  }
`;
