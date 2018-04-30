import React from 'react'

import { Bar, Bg, Container, WhiteButton } from './_shared'
import Icon from '../../Icon'
import Menu from '..'

export default () => (
  <Container align="left">
    <Bg />
    <Bar>
      <Menu
        position={Menu.positions.topLeft}
        control={
          <WhiteButton icon>
            <Icon name="more_vert" />
          </WhiteButton>
        }
      >
        <Menu.Item>Some Action</Menu.Item>
        <Menu.Item>Another Action</Menu.Item>
        <Menu.Divider />
        <Menu.Item disabled>Disabled Action</Menu.Item>
        <Menu.Item>Yet another action</Menu.Item>
      </Menu>
    </Bar>
  </Container>
)
