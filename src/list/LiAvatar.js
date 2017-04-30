import React, { PropTypes } from 'react';
import { ImgAvatar, IconAvatar } from './List.style';

export default function LiAvatar({ src, children, ...props }) {
  if (src) {
    return <ImgAvatar {...props} />;
  }
  return <IconAvatar {...props}>{children}</IconAvatar>;
}

LiAvatar.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
};
