import React, { PropTypes } from 'react';
import {
  RadioStyle,
  RadioButton,
  RadioLabel,
  OuterCircle,
  InnerCircle,
} from './Radio.style';

export default function Radio({ label, disabled, ...props }) {
  return (
    <RadioStyle>
      <RadioButton type="radio" {...props} disabled={disabled} />
      {label && <RadioLabel disabled={disabled}>{label}</RadioLabel>}
      <OuterCircle disabled={disabled} />
      <InnerCircle disabled={disabled} />
    </RadioStyle>
  );
}

Radio.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
