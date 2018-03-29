import PropTypes from 'prop-types'
import React from 'react'

import { BadgeWrap, BadgeText } from './Badge.style'

export default function Badge({
  text,
  forButton,
  overlap,
  background,
  children,
  inverse,
  ...props
}) {
  return (
    <BadgeWrap {...props}>
      {children}
      <BadgeText
        forButton={forButton}
        overlap={overlap}
        background={background}
        inverse={inverse}
      >
        {text}
      </BadgeText>
    </BadgeWrap>
  )
}

Badge.propTypes = {
  text: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  forButton: PropTypes.bool,
  overlap: PropTypes.bool,
  inverse: PropTypes.bool,
}

Badge.defaultProps = {
  forButton: false,
  overlap: false,
  inverse: false,
}
