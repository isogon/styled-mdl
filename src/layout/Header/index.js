import React, { PropTypes } from 'react';
import { Theme } from '../../theme';

import StyledHeader from './StyledHeader';
import headerTheme from './headerTheme';

export default function Header({ children }) {
  return (
    <Theme theme={headerTheme}>
      <StyledHeader>
        {children}
      </StyledHeader>
    </Theme>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};
