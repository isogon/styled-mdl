import styled from 'styled-components';
import { getters } from '../util';

const { mqMedium, paddingSmall, paddingLarge } = getters;

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
  align-items: center;
  height: 4rem;
  margin: 0;
  padding: 0 ${paddingSmall};
  @media ${mqMedium} {
    padding: 0 ${paddingLarge};
  }
  > * {
    flex-shrink: 0;
  }
`;
