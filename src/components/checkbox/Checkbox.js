import { compose, setDisplayName, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';

import {
  CheckboxWrap,
  CheckboxButton,
  CheckboxLabel,
  BoxOutline,
  TickOutline,
} from './Checkbox.style';
import { proxyStyledStatics } from '../../hocs';

export const CheckboxBase = ({ label, __StyledComponent__: Styled, ...props }) => (
  <Styled {...props}>
    <CheckboxButton type="checkbox" {...props} />
    {label && <CheckboxLabel {...props}>{label}</CheckboxLabel>}
    <BoxOutline {...props}>
      <TickOutline {...props} />
    </BoxOutline>
  </Styled>
);

const enhance = compose(
  proxyStyledStatics(CheckboxWrap),
  setDisplayName('Checkbox'),
  setPropTypes({
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }),
);

export default enhance(CheckboxBase);
