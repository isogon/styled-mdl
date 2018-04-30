import PropTypes from 'prop-types'
import React from 'react'
import always from 'lodash/fp/constant'
import isFunction from 'lodash/fp/isFunction'

import Ripple from '../components/Ripple'

const withRipple = (mapProps = {}) => {
  const getRippleProps = isFunction(mapProps) ? mapProps : always(mapProps)
  return (Component) => {
    const WrappedWithRipple = (props) => (
      <Component {...props}>
        {props.children}
        {!props.disableRipple && <Ripple {...getRippleProps(props)} />}
      </Component>
    )

    WrappedWithRipple.defaultProps = {
      disableRipple: false,
    }

    WrappedWithRipple.propTypes = {
      children: PropTypes.node.isRequired,
      disableRipple: PropTypes.bool,
    }

    return WrappedWithRipple
  }
}

export default withRipple
