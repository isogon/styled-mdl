import React from 'react'
import PropTypes from 'prop-types'

const RobotoFont = ({ variants = '300,400,400i,700' }) => (
  <link
    href={`https://fonts.googleapis.com/css?family=Roboto:${variants}`}
    rel="stylesheet"
  />
)

RobotoFont.propTypes = {
  variants: PropTypes.string,
}

export default RobotoFont
