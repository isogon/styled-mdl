import React from 'react';
import {
  List,
  ListItem,
  LiPrimary,
  LiIcon,
  LiTitle,
} from 'material-components';
import Person from 'react-icons/lib/md/person';

const demo = () => (
  <List>
    <ListItem>
      <LiPrimary>
        <LiIcon><Person /></LiIcon>
        <LiTitle>Bryan Cranston</LiTitle>
      </LiPrimary>
    </ListItem>
  </List>
);

const caption = 'Icons';
const code = `<List>
  <ListItem>
    <ListItemContent>
      <ListItemIcon><Person /></ListItemIcon>
      Bryan Cranston
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>
      <ListItemIcon><Person /></ListItemIcon>
      Aaron Paul
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>
      <ListItemIcon><Person /></ListItemIcon>
      Bob Odenkirk
    </ListItemContent>
  </ListItem>
</List>`;

export default { demo, caption, code };
