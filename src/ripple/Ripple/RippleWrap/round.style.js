import { css } from 'styled-components';
import { makeModifier } from '../../../util';

const round = css`
  border-radius: 50%;
  // Fixes clipping bug in Safari.
  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
`;

export default makeModifier('round', round);
