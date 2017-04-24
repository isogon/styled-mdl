import React, { PropTypes } from 'react';

import { ChipContactImg, ChipContactSpan } from './Chip.style';

export default function ChipContact({ text, src, ...props }) {
  return src
    ? <ChipContactImg src={src} {...props} />
    : <ChipContactSpan {...props}>{text}</ChipContactSpan>;
}

ChipContact.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
};
