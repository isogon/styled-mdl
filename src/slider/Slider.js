import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';
import isUndefined from 'lodash/isUndefined';
import { SliderInput, SliderContainer, SliderBackground } from './Slider.style';

export default class Slider extends Component {
  static propTypes = {
    focused: PropTypes.bool,
    autoFocus: PropTypes.bool,
    active: PropTypes.bool,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  constructor(props) {
    super(props);

    console.log('constructing');

    this.state = {
      value: props.value || props.defaultValue || props.min,
      focused: props.focused || props.autoFocus,
      active: props.active,
    };
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

    console.log('value', value);
    console.log('min', min);
    console.log('percent', (value - min) / (max - min));

    const percentFilled = (value - min) / (max - min);
    const percentEmpty = 1 - percentFilled;
    const isLowestValue = value === min;

    return (
      <SliderContainer>
        <SliderInput
          type="range"
          max={max}
          min={min}
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
