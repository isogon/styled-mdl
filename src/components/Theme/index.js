import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import defaultTheme from '../../theme/defaultTheme'

const Theme = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.defaultProps = {
  theme: defaultTheme,
}

Theme.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}

export default Theme
