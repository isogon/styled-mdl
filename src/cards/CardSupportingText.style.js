import styled, { css } from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  color: ${g.cardSupportingTextTextColor};
  font-size: ${g.cardSupportingTextFontSize}px;
  line-height: ${g.cardSupportingTextLineHeight}px;
  overflow: hidden;
  padding: ${g.cardVerticalPadding}px ${g.cardHorizontalPadding}px;
  width: 90%;
  ${({ border }) => border && css`
    border-bottom: 1px solid ${g.cardBorderColor};
  `}
`;
