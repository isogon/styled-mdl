import React, { PropTypes } from 'react';

import { Ripple } from '../ripple';

import StyledButton from './Button.style';

const preventDefault = (e) => e.preventDefault();

export default function Button({ children, ripple, ...props }) {
  return (
    <StyledButton {...props} onMouseDown={preventDefault}>
      {children}
      {ripple && !props.disabled && !props.icon && <Ripple round={props.fab} />}
    </StyledButton>
  );
}

Button.defaultProps = {
  ripple: true,
};

Button.propTypes = {
  children: PropTypes.node,
  ripple: PropTypes.bool,
  fab: PropTypes.bool,
  icon: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};
