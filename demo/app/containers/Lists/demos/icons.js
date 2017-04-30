import React from 'react';
import { List, ListItem, LiIcon } from 'material-components';
import Person from 'react-icons/lib/md/person';

const demo = () => (
  <List>
    <ListItem>
      <LiIcon><Person /></LiIcon>
      Bryan Cranston
    </ListItem>
    <ListItem>
      <LiIcon><Person /></LiIcon>
      Aaron Paul
    </ListItem>
    <ListItem>
      <LiIcon><Person /></LiIcon>
      Bob Odenkirk
    </ListItem>
  </List>
);

const caption = 'Icons';
const code = `<List>
  <ListItem>
    <LiIcon><Person /></LiIcon>
    Bryan Cranston
  </ListItem>
  <ListItem>
    <LiIcon><Person /></LiIcon>
    Aaron Paul
  </ListItem>
  <ListItem>
    <LiIcon><Person /></LiIcon>
    Bob Odenkirk
  </ListItem>
</List>`;

export default { demo, caption, code };
