import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './defaultTheme';

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
