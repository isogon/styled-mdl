import React from 'react'

import { Bar, Bg, Container, WhiteButton } from './_shared'
import Icon from '../../Icon'
import Menu from '..'

export default () => (
  <Container align="right">
    <Bar>
      <Menu bottomRight>
        {({ openMenu, menu, isOpen }) => (
          <React.Fragment>
            <WhiteButton
              icon
              onClick={openMenu}
              aria-haspopup="true"
              aria-owns={isOpen ? 'menu-list' : null}
            >
              <Icon name="more_vert" />
            </WhiteButton>
            {menu(
              <Menu.List id="menu-list" role="menu">
                <Menu.Item>Some Action</Menu.Item>
                <Menu.Item>Another Action</Menu.Item>
                <Menu.Divider />
                <Menu.Item disabled>Disabled Action</Menu.Item>
                <Menu.Item>Yet another action</Menu.Item>
              </Menu.List>,
            )}
          </React.Fragment>
        )}
      </Menu>
    </Bar>
    <Bg />
  </Container>
)
