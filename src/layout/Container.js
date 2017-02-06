import styled from 'styled-components';
import { getters } from '../util';
const { mqMedium, paddingSmall, paddingLarge } = getters;

export default styled.div`
  padding: 0 ${paddingSmall};
  flex: 1;
  overflow: auto;
  @media ${mqMedium} {
    padding: 0 ${paddingLarge};
  }
`;
