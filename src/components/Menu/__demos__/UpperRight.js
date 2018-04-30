import React from 'react'

import { Bar, Bg, Container, WhiteButton } from './_shared'
import Icon from '../../Icon'
import Menu from '..'

export default () => (
  <Container align="right">
    <Bg />
    <Bar>
      <Menu
        position={Menu.positions.topRight}
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
