import React, { PropTypes } from 'react';
import {
  CheckboxStyle,
  CheckboxButton,
  CheckboxLabel,
  BoxOutline,
  TickOutline,
} from './Checkbox.style';

export default function Checkbox({ name, value, label, disabled, ...props }) {
  return (
    <CheckboxStyle>
      <CheckboxButton type="checkbox" name={name} value={value} {...props} />
      {label && <CheckboxLabel disabled={disabled}>{label}</CheckboxLabel>}
      <BoxOutline disabled={disabled}>
        <TickOutline disabled={disabled} />
      </BoxOutline>
    </CheckboxStyle>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};
