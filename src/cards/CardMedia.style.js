import styled from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  background-color: ${g.cardImagePlaceholderColor};
  background-repeat: repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-origin: padding-box;
  background-attachment: scroll;
  box-sizing: border-box;
`;
