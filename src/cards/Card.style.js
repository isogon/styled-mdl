import styled, { css } from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${g.cardFontSize}px;
  font-weight: 400;
  min-height: ${g.cardHeight}px;
  overflow: hidden;
  width: ${g.cardWidth}px;
  z-index: ${g.cardZIndex};
  position: relative;
  background: ${g.cardBackgroundColor};
  border-radius: 2px;
  box-sizing: border-box;
  ${({ expand }) => expand && css`
    flex-grow: 1;
  `}
`;
