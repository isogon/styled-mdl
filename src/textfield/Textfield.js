import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';

import {
  TextfieldBase,
  Input,
  Textarea,
  Label,
  ErrorMessage,
} from './Textfield.style';

export default class Textfield extends Component {
  static propTypes = {
    error: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    multiLine: PropTypes.bool,
  };

  static defaultProps = {
    type: 'text',
    value: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      focused: props.autoFocus,
    };
  }

  @autobind handleFocus() {
    this.setState({ focused: true });
  }

  @autobind handleBlur() {
    this.setState({ focused: false });
  }

  @autobind handleChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

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
        {this.props.error &&
          <ErrorMessage>{this.props.error}</ErrorMessage>}
      </TextfieldBase>
    );
  }
}
