import React, { PropTypes } from 'react';
import omit from 'lodash/omit';

import { Input as BaseInput } from '../input';
import {
  TextfieldBase,
  Input,
  Textarea,
  Label,
  ErrorMessage,
  HelperText,
} from './Textfield.style';

export default class Textfield extends BaseInput {
  static propTypes = {
    error: PropTypes.string,
    autoFocus: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    multiLine: PropTypes.bool,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    return (
      <TextfieldBase {...this.props}>
        <Label {...this.props} {...this.state}>{this.props.label}</Label>
        {this.props.multiLine
          ? <Textarea
            {...omit(this.props, ['defaultValue'])}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          : <Input
            {...omit(this.props, ['defaultValue'])}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />}
        {this.props.error && <ErrorMessage>{this.props.error}</ErrorMessage>}
        {this.props.helperText &&
          <HelperText>{this.props.helperText}</HelperText>}
      </TextfieldBase>
    );
  }
}
