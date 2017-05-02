import React from 'react';
import { Menu, MenuItem, MenuDivider, Button } from 'material-components';
import More from 'react-icons/lib/md/more-vert';

import { Container, Bar, Bg } from './styled';

const demo = () => (
  <Container align="left">
    <Bar>
      <Menu control={<Button icon><More /></Button>}>
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

const caption = 'Lower left';
const code = `<Menu control={<Button icon><More /></Button>}>
  <MenuItem>Some Action</MenuItem>
  <MenuItem>Another Action</MenuItem>
  <MenuDivider />
  <MenuItem disabled>Disabled Action</MenuItem>
  <MenuItem>Yet another action</MenuItem>
</Menu`;

export default { demo, caption, code };
