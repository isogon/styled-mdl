import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';
import isUndefined from 'lodash/isUndefined';
import { SliderInput, SliderContainer, SliderBackground } from './Slider.style';

export default class Slider extends Component {
  static propTypes = {
    focused: PropTypes.bool,
    autoFocus: PropTypes.bool,
    active: PropTypes.bool,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    min: PropTypes.string,
    max: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue;

    this.state = {
      focused: props.focused || props.autoFocus,
      active: props.active,
    };

    if (value) {
      this.state.value = value;
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
    this.setState({ focused: true });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  @autobind handleBlur(e) {
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  @autobind handleMouseDown() {
    this.setState({ active: true });
  }

  @autobind handleMouseUp(e) {
    this.setState({ active: false, focused: false });
    this.handleBlur(e);
  }

  render() {
    const { disabled, max, min } = this.props;
    const { active } = this.state;

    const value = isUndefined(this.props.value)
      ? this.state.value
      : this.props.value;

    const focused = isUndefined(this.props.focused)
      ? this.state.focused
      : this.props.focused;

    const valueF = parseFloat(value, 10);
    const maxF = parseFloat(max, 10);
    const minF = parseFloat(min, 10);

    const percentFilled = isUndefined(value)
      ? 0
      : (valueF - minF) / (maxF - minF);
    const percentEmpty = 1 - percentFilled;
    const isLowestValue = isUndefined(value) || valueF === minF;

    return (
      <SliderContainer>
        <SliderInput
          type="range"
          max={maxF}
          min={minF}
          value={value}
          disabled={disabled}
          focused={focused}
          active={active}
          isLowestValue={isLowestValue}
          onInput={this.handleChange}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        />
        <SliderBackground
          disabled={disabled}
          active={active}
          focused={focused}
          isLowestValue={isLowestValue}
          percentFilled={percentFilled}
          percentEmpty={percentEmpty}
        />
      </SliderContainer>
    );
  }
}
