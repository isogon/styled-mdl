import React, { PropTypes } from 'react';

import { ChipButton, ChipText } from './Chip.style';
import ChipContact from './ChipContact';

export default function ButtonChip({ contact, children, ...props }) {
  return (
    <ChipButton contact={!!contact} {...props}>
      {contact && <ChipContact {...contact} />}
      <ChipText>{children}</ChipText>
    </ChipButton>
  );
}

ButtonChip.propTypes = {
  contact: PropTypes.shape({
    color: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
