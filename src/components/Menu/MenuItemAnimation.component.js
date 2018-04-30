import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { MENU_EXPAND_DURATION, MenuItemAnimationStyle } from './Menu.style'

export default class MenuItemAnimation extends Component {
  state = {
    transitionDelay: 0,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      const { offsetTop } = this.menuItem
      const { height } = this.menuItem.getBoundingClientRect()
      const transitionDelay = nextProps.fadeDown
        ? offsetTop / nextProps.menuHeight * MENU_EXPAND_DURATION
        : -(offsetTop + height - nextProps.menuHeight) /
          nextProps.menuHeight *
          MENU_EXPAND_DURATION

      this.setState({ transitionDelay })
    }
  }

  render() {
    return (
      <MenuItemAnimationStyle
        {...this.props}
        style={{
          transitionDelay: `${this.state.transitionDelay}ms`,
        }}
        innerRef={(menuItem) => {
          this.menuItem = menuItem
        }}
      >
        {this.props.children}
      </MenuItemAnimationStyle>
    )
  }
}

MenuItemAnimation.propTypes = {
  isVisible: PropTypes.bool,
  fadeDown: PropTypes.bool,
  children: PropTypes.node,
}
