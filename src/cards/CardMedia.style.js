import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { getters } from '../util';

const { card } = getters;

export const CardMedia = setDisplayName('CardMedia')(styled.div`
  background-color: ${card.imagePlaceholderColor};
  background-repeat: repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-origin: padding-box;
  background-attachment: scroll;
  box-sizing: border-box;
`);
