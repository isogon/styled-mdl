import React, { PropTypes } from 'react';

import StyledButton from './StyledButton';
import StyledAnchor from './StyledAnchor';
import StyledLink from './StyledLink';

export default function NavLink(props) {
  if (props.to) {
    return <StyledLink {...props} />;
  }

  if (props.href) {
    return <StyledAnchor {...props} />;
  }

  return <StyledButton {...props} />;
}

NavLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
};
