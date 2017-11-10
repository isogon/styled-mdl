import React from 'react';
import { Menu, MenuItem, MenuDivider, Button, Icon } from 'material-components';

import { Container, Bar, Bg } from './styled';

const demo = () => (
  <Container align="right">
    <Bg />
    <Bar>
      <Menu
        topRight
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
  </Container>
);

const caption = 'Upper Right';
const code = `<Menu topRight control={<Button icon><Icon name="more_vert" /></Button>}>
  <MenuItem>Some Action</MenuItem>
  <MenuItem>Another Action</MenuItem>
  <MenuDivider />
  <MenuItem disabled>Disabled Action</MenuItem>
  <MenuItem>Yet another action</MenuItem>
</Menu>`;

export default { demo, caption, code };
