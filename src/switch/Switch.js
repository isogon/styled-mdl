import { compose, setDisplayName, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';

import { proxyStyledStatics } from '../hocs';
import {
  SwitchWrapStyle,
  SwitchStyle,
  SwitchButton,
  SwitchLabel,
  Track,
  Thumb,
} from './Switch.style';

export const SwitchBase = ({ label, disabled, __StyledComponent__: Styled, ...props }) => (
  <Styled {...props}>
    <SwitchStyle>
      <SwitchButton type="checkbox" disabled={disabled} {...props} />
      {label && <SwitchLabel disabled={disabled}>{label}</SwitchLabel>}
      <Track disabled={disabled} />
      <Thumb disabled={disabled} />
    </SwitchStyle>
  </Styled>
);

const enhance = compose(
  proxyStyledStatics(SwitchWrapStyle),
  setDisplayName('Switch'),
  setPropTypes({
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }),
);

export default enhance(SwitchBase);
