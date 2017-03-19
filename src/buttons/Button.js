import React, { PropTypes } from 'react';

import { Ripple } from '../ripple';

import StyledButton from './Button.style';

const preventDefault = (e) => e.preventDefault();
const shouldShowRipple = (props) => props.ripple && !props.disabled && !props.icon;

export default function Button({ children, text, ...props }) {
  return (
    <StyledButton {...props} onMouseDown={preventDefault}>
      {children || text}
      {shouldShowRipple(props) ? <Ripple round={props.fab} /> : null}
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
