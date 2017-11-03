import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes } from 'recompose';

import { withStyle } from '../util/tools';
import { chipStyle, ChipText } from './Chip.style';
import ChipContact from './ChipContact';

export const ButtonChipBase = ({ contact, children, className }) => (
  <button className={className}>
    {contact && <ChipContact {...contact} />}
    <ChipText>{children}</ChipText>
  </button>
);

const enhance = compose(
  setPropTypes({
    contact: PropTypes.shape({
      color: PropTypes.string,
      textColor: PropTypes.string,
      text: PropTypes.string,
      src: PropTypes.string,
    }),
    children: PropTypes.node.isRequired,
  }),
  withStyle(chipStyle)
);

export default enhance(ButtonChipBase);
