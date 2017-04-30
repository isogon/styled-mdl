import React from 'react';
import {
  List,
  ListItem,
  LiPrimary,
  LiSecondary,
  LiAction,
  LiAvatar,
  LiTextBody,
  LiTitle,
  Button,
} from 'material-components';
import Person from 'react-icons/lib/md/person';
import Star from 'react-icons/lib/md/star';

const demo = () => (
  <List width="650px">
    <ListItem threeLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        <LiTitle>Bryan Cranston</LiTitle>
        <LiTextBody>
          Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.
        </LiTextBody>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
  </List>
);
const caption = 'Three line';
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
