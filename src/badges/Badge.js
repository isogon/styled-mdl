import React, { PropTypes } from 'react';

import { BadgeWrap, BadgeText } from './Badge.style';

export default function Badge({ text, children, ...props }) {
  return (
    <BadgeWrap {...props}>
      {children}
      <BadgeText {...props}>{text}</BadgeText>
    </BadgeWrap>
  );
}

Badge.propTypes = {
  text: PropTypes.node,
  children: PropTypes.node,
};

Badge.defaultProps = {
  background: true,
};
