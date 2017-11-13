import { ifProp } from 'styled-tools';
import { setDisplayName } from 'recompose';
import styled, { css } from 'styled-components';

import { getters } from '../util';

const { card } = getters;

export const CardTitle = setDisplayName('CardTitle')(styled.header`
  align-items: center;
  color: ${card.textColor};
  display: block;
  display: flex;
  line-height: normal;
  padding: ${card.verticalPadding}px ${card.horizontalPadding}px;
  perspective-origin: ${card.titlePerspectiveOriginX}px ${card.titlePerspectiveOriginY}px;
  transform-origin: ${card.titleTransformOriginX}px ${card.titleTransformOriginY}px;
  box-sizing: border-box;
  ${ifProp('border', css`
    border-bottom: 1px solid ${card.borderColor};
  `)}
  ${ifProp('expand', css`
    flex-grow: 1;
  `)}
`);
