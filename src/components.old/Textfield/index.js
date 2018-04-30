import { compose, setPropTypes, setDisplayName, defaultProps } from 'recompose'
import PropTypes from 'prop-types'
import React from 'react'
import omit from 'lodash/omit'

import BaseInput from '../../Input'
import {
  ErrorMessage,
  HelperText,
  Input,
  Label,
  Textarea,
  TextfieldStyle,
} from './Textfield.style'
import proxyStyledStatics from '../../higherOrderComponents/proxyStyledStatics'

export class TextfieldBase extends BaseInput {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    const { __StyledComponent__: Styled, ...props } = this.props
    const Component = props.multiLine ? Textarea : Input
    return (
      <Styled {...props}>
        <Label {...props} {...this.state}>
          {props.label}
        </Label>
        <Component
          {...omit(props, ['defaultValue'])}
          {...this.state}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
        {props.helperText && <HelperText>{props.helperText}</HelperText>}
      </Styled>
    )
  }
}

const enhance = compose(
  proxyStyledStatics(TextfieldStyle),
  setDisplayName('Textfield'),
  setPropTypes({
    error: PropTypes.string,
    autoFocus: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    multiLine: PropTypes.bool,
  }),
  defaultProps({
    type: 'text',
  }),
)

export default enhance(TextfieldBase)
