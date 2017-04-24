import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';

import {
  TextfieldBase,
  Input,
  Textarea,
  Label,
  ErrorMessage,
} from './Textfield.style';

function ErrorHolder({ message }) {
  return message ? <ErrorMessage>{message}</ErrorMessage> : null;
}

ErrorHolder.propTypes = {
  message: PropTypes.string,
};

export default class Textfield extends Component {
  static propTypes = {
    error: PropTypes.string,
    autoFocus: PropTypes.bool,
    handleChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
  };

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
    if (this.props.handleChange) {
      this.props.handleChange(e);
    }
  }

  render() {
    const { props, state } = this;
    return (
      <TextfieldBase {...props}>
        <Label {...props} {...state}>{this.props.label}</Label>
        {props.multiLine
          ? <Textarea
            {...props}
            {...state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          : <Input
            {...props}
            {...state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />}
        <ErrorHolder message={this.props.error} />
      </TextfieldBase>
    );
  }
}
