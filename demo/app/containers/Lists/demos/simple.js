import React from 'react';
import { List, ListItem } from 'material-components';

const demo = () => (
  <List>
    <ListItem>Bryan Cranston</ListItem>
    <ListItem>Aaron Paul</ListItem>
    <ListItem>Bob Odenkirk</ListItem>
  </List>
);
const caption = 'Simple list';
const code = `<List>
  <ListItem>Bryan Cranston</ListItem>
  <ListItem>Aaron Paul</ListItem>
  <ListItem>Bob Odenkirk</ListItem>
</List>`;

export default { demo, caption, code };
