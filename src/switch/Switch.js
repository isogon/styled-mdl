import React, { PropTypes } from 'react';
import {
  SwitchWrap,
  SwitchStyle,
  SwitchButton,
  SwitchLabel,
  Track,
  Thumb,
} from './Switch.style';

export default function Switch({ name, value, label, disabled, ...props }) {
  return (
    <SwitchWrap>
      <SwitchStyle>
        <SwitchButton type="checkbox" name={name} value={value} disabled={disabled} {...props} />
        {label && <SwitchLabel disabled={disabled}>{label}</SwitchLabel>}
        <Track disabled={disabled} />
        <Thumb disabled={disabled} />
      </SwitchStyle>
    </SwitchWrap>
  );
}

Switch.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
