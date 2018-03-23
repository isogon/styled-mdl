import { setDisplayName, setPropTypes, defaultProps, compose } from 'recompose'
import Portal from 'react-portal'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { ToastAnimation } from './Toast.style'
import proxyStyledStatics from '../../higherOrderComponents/proxyStyledStatics'

export class ToastBase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: props.isActive,
      isActive: props.isActive,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isActive && nextProps.isActive && !this.isAnimating) {
      this.setState({ isOpened: true })
      this.animateIn = setTimeout(() => this.setState({ isActive: true }))
    }

    if (this.state.isActive && !nextProps.isActive) {
      this.setState({ isActive: false })
      this.isAnimating = true

      this.animateOut = setTimeout(() => {
        this.isAnimating = false
        if (this.props.isActive) {
          this.setState({ isActive: true })
        } else {
          this.setState({ isOpened: false })
        }
      }, 300)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.animateOut)
    clearTimeout(this.animateIn)
  }

  render() {
    const { __StyledComponent__: Styled, ...props } = this.props
    return (
      <Portal isOpened={this.state.isOpened}>
        <Styled {...props} isActive={this.state.isActive}>
          {props.children}
        </Styled>
      </Portal>
    )
  }
}

const enhance = compose(
  proxyStyledStatics(ToastAnimation),
  setDisplayName('Toast'),
  defaultProps({
    position: 'left',
  }),
  setPropTypes({
    isActive: PropTypes.bool,
    position: PropTypes.string,
    children: PropTypes.node,
  }),
)

export default enhance(ToastBase)
