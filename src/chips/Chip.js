import React, { PropTypes } from 'react';
import MdCancel from 'react-icons/lib/md/cancel';

import { ChipSpan, ChipText, ChipAction } from './Chip.style';
import ChipContact from './ChipContact';

export default function Chip({
  deletable,
  contact,
  children,
  onClickDelete,
  ...props
}) {
  return (
    <ChipSpan deletable={deletable} contact={!!contact} {...props}>
      {contact && <ChipContact {...contact} />}
      <ChipText>{children}</ChipText>
      {deletable &&
        <ChipAction onClick={onClickDelete}><MdCancel /></ChipAction>}
    </ChipSpan>
  );
}

Chip.propTypes = {
  deletable: PropTypes.bool,
  contact: PropTypes.shape({
    color: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  onClickDelete: PropTypes.func,
};
