import React from 'react'

import { MenuDividerBase } from './Menu.style'
import { MenuItemClass } from './MenuItem'

export default class MenuDivider extends MenuItemClass {
  render() {
    return (
      <MenuDividerBase
        {...this.props}
        {...this.state}
        innerRef={(menuItem) => {
          this.menuItem = menuItem
        }}
      />
    )
  }
}
