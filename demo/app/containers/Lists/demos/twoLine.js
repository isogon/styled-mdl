import React from 'react';
import {
  List,
  ListItem,
  LiPrimary,
  LiSecondary,
  LiAction,
  LiAvatar,
  LiSubTitle,
  LiInfo,
  LiTitle,
  Button,
} from 'material-components';
import Person from 'react-icons/lib/md/person';
import Star from 'react-icons/lib/md/star';

const demo = () => (
  <List>
    <ListItem twoLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        <LiTitle>Bryan Cranston</LiTitle>
        <LiSubTitle>62 Episodes</LiSubTitle>
      </LiPrimary>
      <LiSecondary>
        <LiInfo>Actor</LiInfo>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
  </List>
);
const caption = 'Two line';
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
