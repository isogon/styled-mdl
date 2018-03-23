import React from 'react'

import { MenuDemoWrapper } from './_shared'
import Button from '../../Button'
import Icon from '../../Icon'
import Menu from '..'

export default () => (
  <MenuDemoWrapper align="right">
    <Menu
      bottomRight
      control={
        <Button icon>
          <Icon name="more_vert" />
        </Button>
      }
    >
      <Menu.Item>Some Action</Menu.Item>
      <Menu.Item>Another Action</Menu.Item>
      <Menu.Divider />
      <Menu.Item disabled>Disabled Action</Menu.Item>
      <Menu.Item>Yet another action</Menu.Item>
    </Menu>
  </MenuDemoWrapper>
)
