import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { compose, setPropTypes, setDisplayName, defaultProps } from 'recompose';

import { withStyle } from '../util';
import { Input as BaseInput } from '../input';
import {
  textfieldStyle,
  Input,
  Textarea,
  Label,
  ErrorMessage,
  HelperText,
} from './Textfield.style';

export class TextfieldBase extends BaseInput {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={className}>
        <Label {...props} {...this.state}>{props.label}</Label>
        {props.multiLine
          ? <Textarea
            {...omit(props, ['defaultValue'])}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          : <Input
            {...omit(props, ['defaultValue'])}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />}
        {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
        {props.helperText &&
          <HelperText>{props.helperText}</HelperText>}
      </div>
    );
  }
}

const enhance = compose(
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
  withStyle(textfieldStyle),
  setDisplayName('Textfield'),
);

export default enhance(TextfieldBase);
