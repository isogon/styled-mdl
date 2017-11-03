import React from 'react';
import PropTypes from 'prop-types';
import {
  compose,
  setPropTypes,
  setDisplayName,
  defaultProps,
  withProps,
} from 'recompose';

import { withStyle, omitProps } from '../util/tools';
import { Ripple } from '../ripple';

import { ButtonStyles } from './Button.style';

export const ButtonBase = ({
  children,
  text,
  shouldShowRipple,
  isDark,
  isRound,
  ...props
}) => (
  <button {...props}>
    {children || text}
    {shouldShowRipple && <Ripple round={isRound} dark={isDark} />}
  </button>
);

const enhance = compose(
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
  withStyle(ButtonStyles),
  omitProps([
    'colored',
    'raised',
    'primary',
    'accent',
    'fab',
    'mini',
    'icon',
    'accent',
    'ripple',
  ]),
  setDisplayName('Button')
);

export default enhance(ButtonBase);
