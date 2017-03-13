import styled from 'styled-components';
import { getters as g } from '../util';

export default styled.h1`
  align-self: flex-end;
  color: inherit;
  display: block;
  display: flex;
  font-size: ${g.cardTitleFontSize}px;
  font-weight: ${g.cardTitleTextFontWeight};
  line-height: normal;
  overflow: hidden;
  transform-origin: ${g.cardTitleTextTransformOriginX}px ${g.cardTitleTextTransformOriginY}px;
  margin: 0;
`;
