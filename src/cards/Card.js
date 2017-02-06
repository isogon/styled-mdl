import styled from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  background: ${g.bg};
  border-radius: ${g.border}px;
  box-shadow: ${g.boxShadow};
  box-sizing: border-box;
  display: flex;
  flex-grow: 1
  flex-direction: column;
  font-size: ${g.size}px;
  font-weight: 400;
  margin: 1em;
  min-height: 14em;
  min-width: 24em;
  overflow: hidden;
`;
