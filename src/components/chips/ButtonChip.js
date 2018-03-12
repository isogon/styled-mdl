import { compose, setPropTypes, setDisplayName } from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';

import { ButtonChipStyle, ChipText } from './Chip.style';
import { proxyStyledStatics } from '../../hocs';
import ChipContact from './ChipContact';

export const ButtonChipBase = ({ contact, children, __StyledComponent__: Styled, ...props }) => (
  <Styled {...props}>
    {contact && <ChipContact {...contact} />}
    <ChipText>{children}</ChipText>
  </Styled>
);

const enhance = compose(
  proxyStyledStatics(ButtonChipStyle),
  setDisplayName('ButtonChip'),
  setPropTypes({
    contact: PropTypes.shape({
      color: PropTypes.string,
      textColor: PropTypes.string,
      text: PropTypes.string,
      src: PropTypes.string,
    }),
    children: PropTypes.node.isRequired,
  }),
);

export default enhance(ButtonChipBase);
