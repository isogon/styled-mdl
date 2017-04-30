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
  Button,
} from 'material-components';
import Person from 'react-icons/lib/md/person';
import Star from 'react-icons/lib/md/star';

const demo = () => (
  <List>
    <ListItem twoLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Bryan Cranston
        <LiSubTitle>62 Episodes</LiSubTitle>
      </LiPrimary>
      <LiSecondary>
        <LiInfo>Actor</LiInfo>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem twoLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Aaron Paul
        <LiSubTitle>62 Episodes</LiSubTitle>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem twoLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Bob Odenkirk
        <LiSubTitle>62 Episodes</LiSubTitle>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
  </List>
);
const caption = 'Two line';
const code = `<List>
  <ListItem twoLine>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Bryan Cranston
      <LiSubTitle>62 Episodes</LiSubTitle>
    </LiPrimary>
    <LiSecondary>
      <LiInfo>Actor</LiInfo>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem twoLine>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Aaron Paul
      <LiSubTitle>62 Episodes</LiSubTitle>
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem twoLine>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Bob Odenkirk
      <LiSubTitle>62 Episodes</LiSubTitle>
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
</List>`;

export default { demo, caption, code };
