import styled from 'styled-components';
import { getters as g } from '../util';

export default styled.h1`
  color: ${g.fg};
  display: block;
  padding: 0 ${(p) => g.size(p) + g.border(p)}px;
`;
