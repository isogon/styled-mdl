import { compose, setDisplayName, setPropTypes } from 'recompose'
import PropTypes from 'prop-types'
import React from 'react'

import Input from '../../Input'
import { SliderInput, SliderContainer, SliderBackground } from './Slider.style'
import proxyStyledStatics from '../../higherOrderComponents/proxyStyledStatics'

export class SliderBase extends Input {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      value: this.props.value || this.props.defaultValue || this.props.min,
      active: this.props.active,
    }
  }

  handleMouseDown = () => {
    this.setState({ active: true })
  }

  handleMouseUp = (e) => {
    this.setState({ active: false })
    this.handleBlur(e)
  }

  render() {
    const { disabled, max, min, __StyledComponent__: Styled } = this.props
    const { active, value, focused } = this.state

    const percent = (value - min) / (max - min)

    return (
      <Styled>
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
      </Styled>
    )
  }
}

const enhance = compose(
  proxyStyledStatics(SliderContainer),
  setDisplayName('Slider'),
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
)

export default enhance(SliderBase)
