import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { getters as g } from '../util';

export const CardSubtitleText = setDisplayName('CardSubtitleText')(styled.h4`
  font-size: ${g.cardSubtitleFontSize}px;
  color: ${g.cardSubtitleColor}px;
  margin: 0;
`);
