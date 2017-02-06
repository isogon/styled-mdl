import React, { PropTypes } from 'react';

import { composeStyled } from '../../util';
import { Ripple } from '../../ripple';

import modifiers from './modifiers.style';
import base from './base.style';

const StyledButton = composeStyled('button', base, ...modifiers);

export default function Button({ children, ripple, ...props }) {
  return (
    <StyledButton {...props}>
      {children}
      {ripple && !props.icon && <Ripple round={props.fab} />}
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
};
