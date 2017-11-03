import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';

import { withStyle } from '../util/tools';
import {
  CheckboxStyle,
  CheckboxButton,
  CheckboxLabel,
  BoxOutline,
  TickOutline,
} from './Checkbox.style';

export const Checkbox = ({ label, disabled, className, ...props }) => (
  <label className={className} htmlFor={props.htmlFor}>
    <CheckboxButton type="checkbox" disabled={disabled} {...props} />
    {label && <CheckboxLabel disabled={disabled}>{label}</CheckboxLabel>}
    <BoxOutline disabled={disabled}>
      <TickOutline disabled={disabled} />
    </BoxOutline>
  </label>
);

const enhance = compose(
  setPropTypes({
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  withStyle(CheckboxStyle),
  setDisplayName('Checkbox')
);

export default enhance(Checkbox);
