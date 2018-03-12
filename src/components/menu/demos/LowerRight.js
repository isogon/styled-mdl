import React from 'react';
import { Menu, MenuItem, MenuDivider, Button, Icon } from '../../../';

import { Container, Bar, Bg } from './_shared';

export default () => (
  <Container align="right">
    <Bar>
      <Menu
        bottomRight
        control={
          <Button icon>
            <Icon name="more_vert" />
          </Button>
        }
      >
        <MenuItem>Some Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuDivider />
        <MenuItem disabled>Disabled Action</MenuItem>
        <MenuItem>Yet another action</MenuItem>
      </Menu>
    </Bar>
    <Bg />
  </Container>
);
