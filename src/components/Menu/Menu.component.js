import Portal from 'react-portal'
import PropTypes from 'prop-types'
import React, { Component, Children, cloneElement } from 'react'

import {
  MenuContainer,
  MenuControlWrap,
  MenuOutline,
  MenuBase,
} from './Menu.style'
import MenuItemAnimation from './MenuItemAnimation.component'
import menuPositions from './menuPositions'

export default class Menu extends Component {
  state = {
    isVisible: false,
    left: 0,
    top: 0,
    height: 0,
    width: 0,
  }

  componentWillUnmount() {
    this.willUnmount = true
    window.removeEventListener('scroll', this.setMenuPosition, true)
    this.cancelAnimation()
  }

  setMenuPosition = () => {
    if (this.menu && this.control) {
      const control = this.control.getBoundingClientRect()
      const menu = this.menu.getBoundingClientRect()

      switch (this.props.position) {
        case menuPositions.bottomRight:
          this.setState({
            left: control.right - menu.width,
            top: control.bottom,
          })
          break
        case menuPositions.topLeft:
          this.setState({
            left: control.left,
            top: control.top - menu.height,
          })
          break
        case menuPositions.topRight:
          this.setState({
            left: control.right - menu.width,
            top: control.top - menu.height,
          })
          break
        default:
          this.setState({
            left: control.left,
            top: control.bottom,
          })
      }
    }
  }

  setMenuSize = () => {
    if (this.menu) {
      const { height, width } = this.menu.getBoundingClientRect()
      this.setState({ height, width })
    }
  }

  requestAnimationFrame = () =>
    new Promise((resolve) => {
      this.animationFrame = requestAnimationFrame(resolve)
    })

  cancelAnimation = () => {
    cancelAnimationFrame(this.animationFrame)
  }

  handleOpen = () => {
    this.requestAnimationFrame().then(() => {
      if (this.allowOpen) {
        window.addEventListener('scroll', this.setMenuPosition, true)

        this.setMenuPosition()
        this.setMenuSize()

        this.requestAnimationFrame().then(() =>
          this.setState({ isVisible: true }),
        )
      }
    })
  }

  handleClose = () => {
    window.removeEventListener('scroll', this.setMenuPosition, true)
    if (!this.willUnmount) {
      this.requestAnimationFrame().then(() =>
        this.setState({ isVisible: false }),
      )
    }
  }

  render() {
    const { children, ...props } = this.props
    const itemAnimationProps = {
      menuHeight: this.state.height,
      isVisible: this.state.isVisible,
      fadeDown:
        props.position === menuPositions.bottomLeft ||
        props.position === menuPositions.bottomRight,
    }

    const animatedChildren = Children.map(children, (child) => (
      <MenuItemAnimation {...itemAnimationProps}>{child}</MenuItemAnimation>
    ))

    const control = cloneElement(props.control, {
      onClick: () => {
        this.allowOpen = !this.state.isVisible
      },
    })

    return (
      <MenuControlWrap>
        <Portal
          openByClickOn={
            <span
              ref={(ctrl) => {
                this.control = ctrl
              }}
            >
              {control}
            </span>
          }
          closeOnOutsideClick
          onOpen={this.handleOpen}
          onClose={this.handleClose}
        >
          <MenuContainer
            {...this.state}
            {...props}
            onClick={() => {
              setTimeout(() => this.handleClose(), 100)
            }}
          >
            <MenuOutline {...this.state} {...props} />
            <MenuBase
              {...this.state}
              {...props}
              innerRef={(menu) => {
                this.menu = menu
              }}
            >
              {animatedChildren}
            </MenuBase>
          </MenuContainer>
        </Portal>
      </MenuControlWrap>
    )
  }
}

Menu.positions = menuPositions

Menu.propTypes = {
  children: PropTypes.node,
  control: PropTypes.node,
  position: PropTypes.oneOf(Object.values(Menu.positions)),
}

Menu.defaultProps = {
  position: menuPositions.bottomLeft,
}
