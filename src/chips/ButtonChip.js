import React, { PropTypes } from 'react';

import { ChipButton, ChipText } from './Chip.style';

export default function ButtonChip({ contact, children, ...props }) {
  return (
    <ChipButton contact={!!contact} {...props}>
      {contact || null}
      <ChipText>{children}</ChipText>
    </ChipButton>
  );
}

ButtonChip.propTypes = {
  contact: PropTypes.node,
  children: PropTypes.node.isRequired,
};
