import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';

import { withStyle } from '../util';
import {
  RadioStyle,
  RadioButton,
  RadioLabel,
  OuterCircle,
  InnerCircle,
} from './Radio.style';

export const Radio = ({ label, disabled, className, ...props }) => (
  <label className={className} htmlFor={props.htmlFor}>
    <RadioButton type="radio" {...props} disabled={disabled} />
    {label && <RadioLabel disabled={disabled}>{label}</RadioLabel>}
    <OuterCircle disabled={disabled} />
    <InnerCircle disabled={disabled} />
  </label>
);

const enhance = compose(
  setPropTypes({
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  withStyle(RadioStyle),
  setDisplayName('Radio')
);

export default enhance(Radio);
