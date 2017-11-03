import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';

import { withStyle } from '../util';
import {
  switchWrapStyle,
  SwitchStyle,
  SwitchButton,
  SwitchLabel,
  Track,
  Thumb,
} from './Switch.style';

export const SwitchBase = ({ label, disabled, className, ...props }) => (
  <div className={className}>
    <SwitchStyle>
      <SwitchButton type="checkbox" disabled={disabled} {...props} />
      {label && <SwitchLabel disabled={disabled}>{label}</SwitchLabel>}
      <Track disabled={disabled} />
      <Thumb disabled={disabled} />
    </SwitchStyle>
  </div>
);

const enhance = compose(
  withStyle(switchWrapStyle),
  setPropTypes({
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  setDisplayName('Switch')
);

export default enhance(SwitchBase);
