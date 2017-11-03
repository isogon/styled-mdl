import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { compose, setDisplayName, setPropTypes } from 'recompose';

import {
  SliderInput,
  SliderContainerStyle,
  SliderBackground,
} from './Slider.style';
import { Input } from '../input';
import { withStyle } from '../util';

export class SliderBase extends Input {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      value: props.value || props.defaultValue || props.min,
      active: props.active,
    };
  }

  @autobind
  handleMouseDown() {
    this.setState({ active: true });
  }

  @autobind
  handleMouseUp(e) {
    this.setState({ active: false });
    this.handleBlur(e);
  }

  render() {
    const { disabled, max, min, className } = this.props;
    const { active, value, focused } = this.state;

    const percent = (value - min) / (max - min);

    return (
      <div className={className}>
        <SliderInput
          type="range"
          max={max}
          min={min}
          value={value}
          disabled={disabled}
          focused={focused}
          active={active}
          percent={percent}
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
          percent={percent}
        />
      </div>
    );
  }
}

const enhance = compose(
  withStyle(SliderContainerStyle),
  setPropTypes({
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
  }),
  setDisplayName('Slider')
);

export default enhance(SliderBase);
