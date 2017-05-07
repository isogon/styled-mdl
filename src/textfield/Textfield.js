import React, { PropTypes } from 'react';

import { Input as BaseInput } from '../input';
import {
  TextfieldBase,
  Input,
  Textarea,
  Label,
  ErrorMessage,
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
    value: '',
  };

  render() {
    return (
      <TextfieldBase {...this.props}>
        <Label {...this.props} {...this.state}>{this.props.label}</Label>
        {this.props.multiLine
          ? <Textarea
            {...this.props}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          : <Input
            {...this.props}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />}
        {this.props.error && <ErrorMessage>{this.props.error}</ErrorMessage>}
      </TextfieldBase>
    );
  }
}
