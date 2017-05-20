import React, { PropTypes } from 'react';
import warning from 'warning';

import { autobind } from 'core-decorators';
import isUndefined from 'lodash/isUndefined';

const MESSAGE =
  'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.';

const warnIfReadOnly = (props) => {
  const isImmutable = props.value && !props.onChange && !props.readOnly;
  warning(!isImmutable, MESSAGE);
};

export default class Input extends React.Component {
  static propTypes = {
    focused: PropTypes.bool,
    autoFocus: PropTypes.bool,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || props.defaultValue || '',
      focused: props.focused || props.autoFocus || false,
    };

    warnIfReadOnly(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!isUndefined(nextProps.value) && nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }

    if (
      !isUndefined(nextProps.focused) &&
      nextProps.focused !== this.state.focused
    ) {
      this.setState({ focused: nextProps.focused });
    }
  }

  @autobind handleChange(e) {
    if (isUndefined(this.props.value)) {
      this.setState({ value: e.target.value });
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  @autobind handleFocus(e) {
    if (isUndefined(this.props.focused)) {
      this.setState({ focused: true });
    }

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  @autobind handleBlur(e) {
    if (isUndefined(this.props.focused)) {
      this.setState({ focused: false });
    }

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  render() {
    return null;
  }
}
