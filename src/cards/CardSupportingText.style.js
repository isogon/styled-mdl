import { ifProp } from 'styled-tools';
import { setDisplayName } from 'recompose';
import styled, { css } from 'styled-components';

import { getters } from '../util';

const { card } = getters;

export const CardSupportingText = setDisplayName('CardSupportingText')(styled.div`
  color: ${card.supportingTextTextColor};
  font-size: ${card.supportingTextFontSize}px;
  line-height: ${card.supportingTextLineHeight}px;
  overflow: hidden;
  padding: ${card.verticalPadding}px ${card.horizontalPadding}px;
  width: 90%;
  ${ifProp('border', css`
    border-bottom: 1px solid ${card.borderColor};
  `)}
`);
