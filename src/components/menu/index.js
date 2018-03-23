import { compose, setDisplayName, setPropTypes } from 'recompose'
import Portal from 'react-portal'
import PropTypes from 'prop-types'
import React, { Component, Children, cloneElement } from 'react'

import {
  MenuContainer,
  MenuControlWrap,
  MenuOutline,
  MenuBase,
} from './Menu.style'
import proxyStyledStatics from '../../higherOrderComponents/proxyStyledStatics'
import MenuDivider from './MenuDivider'
import MenuItem from './MenuItem'
import getRelativePosition from './getRelativePosition'

export class Menu extends Component {
  state = {
    isVisible: false,
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMenuPosition, true)
    cancelAnimationFrame(this.closeMenu)
    cancelAnimationFrame(this.openMenu)
  }

  setMenuPosition = () => {
    const control = getRelativePosition(this.control)
    const position = {}
    if (this.props.bottomRight) {
      position.left = control.right - this.state.width
      position.top = control.bottom
    } else if (this.props.topLeft) {
      position.left = control.left
      position.top = control.top - this.state.height
    } else if (this.props.topRight) {
      position.left = control.right - this.state.width
      position.top = control.top - this.state.height
    } else {
      position.left = control.left
      position.top = control.bottom
    }

    this.setState({ ...position })
  }

  handleOpen = () => {
    this.openMenu = requestAnimationFrame(() => {
      if (this.preventOpen) {
        return
      }

      const menu = this.menu.getBoundingClientRect()
      this.setState({
        height: menu.height,
        width: menu.width,
      })

      window.addEventListener('scroll', this.setMenuPosition, true)
      this.setState({ isVisible: true })
      this.setMenuPosition()
    })
  }

  handleClose = () => {
    window.removeEventListener('scroll', this.setMenuPosition, true)

    this.closeMenu = requestAnimationFrame(() => {
      this.setState({
        isVisible: false,
      })
    })
  }

  render() {
    const { children, __StyledComponent__: Styled, ...props } = this.props

    const childrenWithProps = Children.map(children, (child) =>
      cloneElement(child, {
        isVisible: this.state.isVisible,
        fadeDown: !props.topRight && !props.topLeft,
        getTransitionDelay: () => 0,
      }),
    )

    const control = cloneElement(props.control, {
      onClick: () => {
        this.preventOpen = this.state.isVisible
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
          <Styled
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
              {childrenWithProps}
            </MenuBase>
          </Styled>
        </Portal>
      </MenuControlWrap>
    )
  }
}

const enhance = compose(
  proxyStyledStatics(MenuContainer),
  setPropTypes({
    children: PropTypes.node,
    control: PropTypes.node,
    bottomRight: PropTypes.bool,
    topLeft: PropTypes.bool,
    topRight: PropTypes.bool,
  }),
  setDisplayName('Menu'),
)

const WrappedMenu = enhance(Menu)

WrappedMenu.Divider = MenuDivider
WrappedMenu.Item = MenuItem

export default WrappedMenu
