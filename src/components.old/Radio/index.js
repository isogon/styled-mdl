import { compose, setDisplayName, setPropTypes } from 'recompose'
import PropTypes from 'prop-types'
import React from 'react'

import {
  InnerCircle,
  OuterCircle,
  RadioButton,
  RadioLabel,
  RadioStyle,
} from './Radio.style'
import proxyStyledStatics from '../../higherOrderComponents/proxyStyledStatics'

export const RadioBase = ({
  label,
  disabled,
  __StyledComponent__: Styled,
  ...props
}) => (
  <Styled>
    <RadioButton type="radio" {...props} disabled={disabled} />
    {label && <RadioLabel disabled={disabled}>{label}</RadioLabel>}
    <OuterCircle disabled={disabled} />
    <InnerCircle disabled={disabled} />
  </Styled>
)

const enhance = compose(
  proxyStyledStatics(RadioStyle),
  setDisplayName('Radio'),
  setPropTypes({
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }),
)

export default enhance(RadioBase)
