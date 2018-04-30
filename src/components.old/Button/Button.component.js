import { branch, defaultProps, setPropTypes, setStatic } from 'recompose'
import PropTypes from 'prop-types'
import allPass from 'lodash/fp/overEvery'
import compose from 'lodash/fp/flowRight'
import propEq from 'lodash/fp/matchesProperty'

import { ButtonBase } from './Button.style'
import withRipple from '../../higherOrderComponents/withRipple'

const getRippleProps = (props) => ({
  round: props.fab,
  dark:
    (props.raised || props.fab) &&
    !(props.colored || props.accent || props.primary),
})

const enhance = compose(
  setStatic('Base', ButtonBase),
  setPropTypes({
    children: PropTypes.node.isRequired,
    ripple: PropTypes.bool.isRequired,
    fab: PropTypes.bool,
    icon: PropTypes.bool,
    disabled: PropTypes.bool,
  }),
  defaultProps({
    ripple: true,
    raised: false,
    fab: false,
    icon: false,
    primary: false,
    accent: false,
  }),
  branch(
    allPass([
      propEq('ripple', true),
      propEq('disabled', false),
      propEq('icon', false),
    ]),
    withRipple(getRippleProps),
  ),
)

export default enhance(ButtonBase)
