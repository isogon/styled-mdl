import React from 'react';
import PropTypes from 'prop-types';
import MdCancel from 'react-icons/lib/md/cancel';
import { compose, setPropTypes } from 'recompose';

import { withStyle } from '../util/tools';
import { chipStyle, ChipText, ChipAction } from './Chip.style';
import ChipContact from './ChipContact';

export const ChipBase = ({
  deletable,
  contact,
  children,
  onClickDelete,
  className,
}) => (
  <span className={className}>
    {contact && <ChipContact {...contact} />}
    {children && <ChipText>{children}</ChipText>}
    {deletable && (
      <ChipAction onClick={onClickDelete}>
        <MdCancel />
      </ChipAction>
    )}
  </span>
);

const enhance = compose(
  setPropTypes({
    deletable: PropTypes.bool,
    contact: PropTypes.shape({
      color: PropTypes.string,
      textColor: PropTypes.string,
      text: PropTypes.string,
      src: PropTypes.string,
    }),
    children: PropTypes.node,
    onClickDelete: PropTypes.func,
  }),
  withStyle(chipStyle)
);

export default enhance(ChipBase);
