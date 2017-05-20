import React, { PropTypes } from 'react';
import {
  CheckboxStyle,
  CheckboxButton,
  CheckboxLabel,
  BoxOutline,
  TickOutline,
} from './Checkbox.style';

export default function Checkbox({ label, disabled, ...props }) {
  return (
    <CheckboxStyle>
      <CheckboxButton type="checkbox" disabled={disabled} {...props} />
      {label && <CheckboxLabel disabled={disabled}>{label}</CheckboxLabel>}
      <BoxOutline disabled={disabled}>
        <TickOutline disabled={disabled} />
      </BoxOutline>
    </CheckboxStyle>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
