import React, { PropTypes } from 'react';
import {
  RadioStyle,
  RadioButton,
  RadioLabel,
  OuterCircle,
  InnerCircle,
} from './Radio.style';

export default function Radio({ name, value, label, disabled, ...props }) {
  return (
    <RadioStyle>
      <RadioButton type="radio" name={name} value={value} {...props} />
      <RadioLabel disabled={disabled}>{label}</RadioLabel>
      <OuterCircle disabled={disabled} />
      <InnerCircle disabled={disabled} />
    </RadioStyle>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};
