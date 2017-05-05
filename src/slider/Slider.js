import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';

import {
  SliderInput,
  SliderContainer,
  SliderBackgroundFlex,
  SliderBackgroundLower,
  SliderBackgroundUpper,
} from './Slider.style';

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

    this.controlled = {
      focused: typeof props.focused !== 'undefined',
      value: typeof props.value !== 'undefined',
    };

    this.state = {
      focused: props.focused || props.autoFocus,
      active: props.active,
      value: parseFloat(props.value || props.defaultValue || props.min, 10),
    };
  }

  @autobind handleChange(e) {
    if (!this.props.value) {
      this.setState({ value: parseFloat(e.target.value, 10) });
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  @autobind handleFocus(e) {
    if (!this.controlled.focus) {
      this.setState({ focused: true });
    }

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  @autobind handleBlur(e) {
    if (!this.controlled.focus) {
      this.setState({ focused: false });
    }

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
    const maxF = parseFloat(max, 10);
    const minF = parseFloat(min, 10);

    const value = typeof this.props.value === 'undefined'
      ? this.state.value
      : this.props.value;

    const focused = typeof this.props.focused === 'undefined'
      ? this.state.focused
      : this.props.focused;

    return (
      <SliderContainer>
        <SliderInput
          type="range"
          disabled={disabled}
          max={maxF}
          min={minF}
          value={value}
          focused={focused}
          onInput={this.handleChange}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          active={active}
        />
        <SliderBackgroundFlex disabled={disabled}>
          <SliderBackgroundLower
            disabled={disabled}
            active={active}
            max={maxF}
            min={minF}
            value={value}
            focused={focused}
          />
          <SliderBackgroundUpper
            disabled={disabled}
            active={active}
            max={maxF}
            min={minF}
            value={value}
            focused={focused}
          />
        </SliderBackgroundFlex>
      </SliderContainer>
    );
  }
}
