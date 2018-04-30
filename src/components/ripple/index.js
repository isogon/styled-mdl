import React, { Component } from 'react'

import { getRippleSize, getRippleCoords } from './helpers'
import { RippleEffect, RippleStyle } from './Ripple.style'

export class RippleBase extends Component {
  state = {
    opacity: 0,
  }

  componentDidMount() {
    this.size = getRippleSize(this.wrapper)
  }

  getStyle() {
    const style = {
      height: this.state.size,
      width: this.state.size,
      transform: this.state.transform,
      opacity: this.state.opacity,
    }

    if (!this.state.shouldAnimate) {
      style.transitionProperty = 'none'
    }

    return style
  }

  handleMouseDown = (e) => {
    const coords = getRippleCoords(e)
    const translate = `translate(-50%, -50%) translate(${coords})`
    const initalScale = ' scale3d(0.0001, 0.0001, 1)'
    const finalScale = ' scale3d(1, 1, 1)'
    this.setState({
      size: this.size,
      shouldAnimate: false,
      transform: translate + initalScale,
      opacity: 1,
    })
    requestAnimationFrame(() => {
      this.setState({
        shouldAnimate: true,
        transform: translate + finalScale,
      })
    })
  }

  handleMouseUp = () => {
    this.setState({ opacity: 0 })
  }

  render() {
    return (
      <div
        ref={(e) => {
          this.wrapper = e
        }}
        role="presentation"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseOut={this.handleMouseUp}
        onFocus={this.handleMouseDown}
        onBlur={this.handleMouseUp}
        className={this.props.className}
      >
        <RippleEffect {...this.props} style={this.getStyle()} />
      </div>
    )
  }
}

export default RippleStyle.withComponent(RippleBase)
