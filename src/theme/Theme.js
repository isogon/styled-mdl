import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './';

export default function Theme({ children, theme = defaultTheme }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};
