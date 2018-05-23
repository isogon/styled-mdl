import PropTypes from 'prop-types'
import compose from 'lodash/fp/flowRight'

import { ButtonStyle } from './Button.style'
import mapProps from '../../utils/mapProps'
import withRipple from '../../higherOrderComponents/withRipple'

const Button = compose(
  withRipple(),
  mapProps(({ icon, ...props }) => ({ isIcon: icon, ...props })),
)(ButtonStyle)

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
