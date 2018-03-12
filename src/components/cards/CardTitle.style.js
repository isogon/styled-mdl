import styled, { css } from 'styled-components';
import { setDisplayName } from 'recompose';
import { getters as g } from '../../util';

export const CardTitle = setDisplayName('CardTitle')(styled.header`
  align-items: center;
  color: ${g.cardTextColor};
  display: block;
  display: flex;
  line-height: normal;
  padding: ${g.cardVerticalPadding}px ${g.cardHorizontalPadding}px;
  perspective-origin: ${g.cardTitlePerspectiveOriginX}px ${g.cardTitlePerspectiveOriginY}px;
  transform-origin: ${g.cardTitleTransformOriginX}px ${g.cardTitleTransformOriginY}px;
  box-sizing: border-box;
  ${({ border }) => border && css`
    border-bottom: 1px solid ${g.cardBorderColor};
  `}
  ${({ expand }) => expand && css`
    flex-grow: 1;
  `}
`);
