import { PortalWithState } from 'react-portal'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import noop from 'lodash/fp/noop'

import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from './Surface.constants'
import { SurfaceContainer, SurfaceOutline, SurfaceStyle } from './Surface.style'
import withTimeouts from '../../higherOrderComponents/withTimeouts'

const bottomPositions = new Set([BOTTOM_LEFT, BOTTOM_RIGHT])
const leftPositions = new Set([BOTTOM_LEFT, TOP_LEFT])
const px = 'px'
const rect = (a, b, c, d) => `rect(${a}px, ${b}px, ${c}px, ${d}px)`

class SurfaceBase extends Component {
  state = {
    isVisible: false,
    left: 0,
    top: 0,
    height: 0,
    width: 0,
  }

  componentDidMount() {
    /* eslint-disable-next-line react/no-find-dom-node */
    this.control = ReactDOM.findDOMNode(this)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setSurfacePosition, true)
  }

  get surfaceContainerStyles() {
    const { height, width, left, top, isVisible } = this.state

    if (!isVisible) {
      return {}
    }

    return {
      top: top + px,
      left: left + px,
      height: height + px,
      width: width + px,
    }
  }

  get surfaceOutlineStyles() {
    const { height, width, isVisible } = this.state

    if (!isVisible) {
      return {}
    }

    return {
      height: height + px,
      width: width + px,
    }
  }

  get surfaceStyles() {
    const { height, width, isVisible } = this.state

    if (!isVisible) {
      switch (this.props.position) {
        case BOTTOM_RIGHT:
          return { clip: rect(0, width, 0, width) }
        case TOP_LEFT:
          return { clip: rect(height, 0, height, 0) }
        case TOP_RIGHT:
          return { clip: rect(height, width, height, width) }
        default:
          return { clip: rect(0, 0, 0, 0) }
      }
    }

    return {
      clip: rect(0, width, height, 0),
      height: height + px,
      width: width + px,
    }
  }

  setSurfacePosition = () => {
    if (this.surface && this.control) {
      const { bottom, top, left, right } = this.control.getBoundingClientRect()
      const { height, width } = this.surface.getBoundingClientRect()

      this.setState({
        height,
        width,
        top: bottomPositions.has(this.props.position) ? bottom : top - height,
        left: leftPositions.has(this.props.position) ? left : right - width,
      })
    }
  }

  handleOpen = () => {
    window.addEventListener('scroll', this.setSurfacePosition, true)
    this.props.requestAnimationFrame(() => {
      this.setSurfacePosition()
      this.props.requestAnimationFrame(() => {
        this.setState({ isVisible: true }, () => {
          this.props.onOpen()
        })
      })
    })
  }

  handleClose = () => {
    window.removeEventListener('scroll', this.setSurfacePosition, true)
    this.props.requestAnimationFrame(() => {
      this.setState({ isVisible: false }, () => {
        this.props.onClose()
      })
    })
  }

  render() {
    return (
      <PortalWithState
        closeOnOutsideClick={this.props.closeOnOutsideClick}
        closeOnEsc={this.props.closeOnEsc}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        defaultOpen={this.props.defaultOpen}
      >
        {({ openPortal, closePortal, portal, isOpen }) =>
          this.props.children({
            openSurface: openPortal,
            closeSurface: closePortal,
            isOpen,
            surface: (children) =>
              portal(
                <SurfaceContainer
                  className={this.props.className}
                  isVisible={this.state.isVisible}
                  style={this.surfaceContainerStyles}
                >
                  <SurfaceOutline
                    elevation={this.props.elevation}
                    position={this.props.position}
                    isVisible={this.state.isVisible}
                    style={this.surfaceOutlineStyles}
                  />
                  <SurfaceStyle
                    position={this.props.position}
                    isVisible={this.state.isVisible}
                    style={this.surfaceStyles}
                    innerRef={(surface) => {
                      this.surface = surface
                    }}
                  >
                    {children}
                  </SurfaceStyle>
                </SurfaceContainer>,
              ),
          })
        }
      </PortalWithState>
    )
  }
}

SurfaceBase.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  position: PropTypes.oneOf([TOP_RIGHT, TOP_LEFT, BOTTOM_RIGHT, BOTTOM_LEFT]),
  closeOnOutsideClick: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  elevation: PropTypes.number,
}

SurfaceBase.defaultProps = {
  onOpen: noop,
  onClose: noop,
  elevation: 2,
}

const Surface = withTimeouts(SurfaceBase)

export default Surface
