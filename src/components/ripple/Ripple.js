import React, { Component } from 'react'
import { compose, setDisplayName } from 'recompose'

import { proxyStyledStatics } from '../../hocs'
import { getRippleSize, getRippleCoords } from './helpers'
import { RippleEffect, RippleWrap } from './Ripple.style'

export class RippleBase extends Component {
  state = {
    opacity: 0,
  }

  componentDidMount() {
    this.size = getRippleSize(this.wrapper)
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
      opacity: 0.3,
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
    const { __StyledComponent__: Styled } = this.props

    return (
      <Styled
        innerRef={(wrapper) => {
          this.wrapper = wrapper
        }}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseOut={this.handleMouseUp}
        onFocus={this.handleMouseDown}
        onBlur={this.handleMouseUp}
        className={this.props.className}
      >
        <RippleEffect
          {...this.props}
          style={{
            height: this.state.size,
            width: this.state.size,
            transform: this.state.transform,
            opacity: this.state.opacity,
            transitionProperty: this.state.shouldAnimate
              ? 'transform, width, height, opacity'
              : 'none',
          }}
        />
      </Styled>
    )
  }
}

const enhance = compose(
  proxyStyledStatics(RippleWrap),
  setDisplayName('Ripple'),
)

export default enhance(RippleBase)
