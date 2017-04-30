import React from 'react';
import { List, ListItem, LiPrimary, LiTitle } from 'material-components';

const demo = () => (
  <List>
    <ListItem>
      <LiPrimary>
        <LiTitle>Bryan Cranston</LiTitle>
      </LiPrimary>
    </ListItem>
  </List>
);
const caption = 'Simple list';
const code = `<List>
  <ListItem>
    <ListItemPrimary>Bryan Cranston</ListItemPrimary>
  </ListItem>
  <ListItem>
    <ListItemPrimary>Aaron Paul</ListItemPrimary>
  </ListItem>
  <ListItem>
    <ListItemPrimary>Bob Odenkirk</ListItemPrimary>
  </ListItem>
</List>`;

export default { demo, caption, code };
