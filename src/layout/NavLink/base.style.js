import { css } from 'styled-components';

import { getters as g } from '../../util';

const fontSize = ({ icon }) => (icon ? '1.5rem' : '1rem');

export default css`
  color: ${g.fg};
  display: block;
  text-decoration: none;
  margin: 0;
  font-size: ${fontSize};
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0;
  opacity: .87;
  padding: 0 0.75rem;
  @media (min-width: 640px) {
    padding: 0 1rem;
  }
  &:last-child {
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }
  &:hover {
    opacity: 1;
  }
`;
