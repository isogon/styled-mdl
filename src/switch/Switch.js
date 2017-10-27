import React from 'react';
import PropTypes from 'prop-types';
import {
  SwitchWrap,
  SwitchStyle,
  SwitchButton,
  SwitchLabel,
  Track,
  Thumb,
} from './Switch.style';

export default function Switch({ label, disabled, ...props }) {
  return (
    <SwitchWrap>
      <SwitchStyle>
        <SwitchButton type="checkbox" disabled={disabled} {...props} />
        {label && <SwitchLabel disabled={disabled}>{label}</SwitchLabel>}
        <Track disabled={disabled} />
        <Thumb disabled={disabled} />
      </SwitchStyle>
    </SwitchWrap>
  );
}

Switch.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
