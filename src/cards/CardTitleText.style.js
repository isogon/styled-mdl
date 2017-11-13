import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { getters } from '../util';

const { card } = getters;

export const CardTitleText = setDisplayName('CardTitleText')(styled.h1`
  align-self: flex-end;
  color: inherit;
  display: block;
  display: flex;
  font-size: ${card.titleFontSize}px;
  font-weight: ${card.titleTextFontWeight};
  line-height: normal;
  overflow: hidden;
  transform-origin: ${card.titleTextTransformOriginX}px ${card.titleTextTransformOriginY}px;
  margin: 0;
`);
