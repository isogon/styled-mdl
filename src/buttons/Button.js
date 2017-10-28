import React from 'react';
import PropTypes from 'prop-types';

import { Ripple } from '../ripple';

import StyledButton from './Button.style';

const shouldShowRipple = (props) =>
  props.ripple && !props.disabled && !props.icon;

const isDark = (props) => {
  if (props.raised || props.fab) {
    if (props.colored || props.accent || props.primary) {
      return false;
    }
  }

  return true;
};

export default function Button({ children, text, ...props }) {
  return (
    <StyledButton {...props}>
      {children || text}
      {shouldShowRipple(props) &&
        <Ripple round={props.fab} dark={isDark(props)} />}
    </StyledButton>
  );
}

Button.defaultProps = {
  ripple: true,
};

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  ripple: PropTypes.bool,
  fab: PropTypes.bool,
  icon: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};
