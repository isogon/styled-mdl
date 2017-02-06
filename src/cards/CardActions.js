import styled from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  align-self: flex-end;
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  font-size: ${g.size}px;
  line-height: normal;
  margin-top: auto;
  padding: 8px;
  width: 100%;
`;
