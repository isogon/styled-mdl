import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  setPropTypes,
  setDisplayName,
  defaultProps,
  withProps,
} from 'recompose'

import { Ripple } from '../ripple'

import { StyledButton, ButtonInner } from './Button.style'
import { proxyStyledStatics } from '../../hocs'

export const ButtonBase = ({
  children,
  text,
  shouldShowRipple,
  isDark,
  isRound,
  __StyledComponent__: Button,
  ...props
}) => (
  <Button {...props}>
    <ButtonInner>
      {children || text}
      {shouldShowRipple && <Ripple round={isRound} dark={isDark} />}
    </ButtonInner>
  </Button>
)

const enhance = compose(
  proxyStyledStatics(StyledButton),
  setDisplayName('Button'),
  setPropTypes({
    text: PropTypes.string,
    children: PropTypes.node,
    ripple: PropTypes.bool,
    fab: PropTypes.bool,
    icon: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  defaultProps({
    ripple: true,
  }),
  withProps((props) => ({
    shouldShowRipple: props.ripple && !props.disabled && !props.icon,
    isDark:
      (props.raised || props.fab) &&
      !(props.colored || props.accent || props.primary),
    isRound: props.fab || props.icon,
  })),
)

export default enhance(ButtonBase)
