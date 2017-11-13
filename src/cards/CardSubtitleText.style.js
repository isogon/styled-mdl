import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { getters } from '../util';

const { card } = getters;
export const CardSubtitleText = setDisplayName('CardSubtitleText')(styled.h4`
  font-size: ${card.subtitleFontSize}px;
  color: ${card.subtitleColor}px;
  margin: 0;
`);
