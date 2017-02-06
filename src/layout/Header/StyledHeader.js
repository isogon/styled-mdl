import styled from 'styled-components';
import { getters as g } from '../../util';

export default styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  min-height: 4rem;
  max-height: 1000px;
  z-index: 3;
  background-color: ${g.bg};
  color: ${g.fg};
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-property: max-height,box-shadow;
`;
