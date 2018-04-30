import PropTypes from 'prop-types'

import { ButtonStyle } from './Button.style'
import withRipple from '../../higherOrderComponents/withRipple'

const Button = withRipple()(ButtonStyle)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  raised: PropTypes.bool,
  icon: PropTypes.bool,
  fab: PropTypes.bool,
  mini: PropTypes.bool,
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  raised: false,
  icon: false,
  fab: false,
  mini: false,
}

export default Button
