import React from 'react';

import MenuItem from './MenuItem';
import { MenuDivider as MenuDividerBase } from './Menu.style';

export default class MenuDivider extends MenuItem {
  render() {
    return (
      <MenuDividerBase
        {...this.props}
        {...this.state}
        innerRef={(menuItem) => {
          this.menuItem = menuItem;
        }}
      />
    );
  }
}
