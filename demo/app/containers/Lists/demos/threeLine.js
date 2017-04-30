import React from 'react';
import {
  List,
  ListItem,
  LiPrimary,
  LiSecondary,
  LiAvatar,
  LiAction,
  LiTextBody,
  Button,
} from 'material-components';
import Person from 'react-icons/lib/md/person';
import Star from 'react-icons/lib/md/star';

const demo = () => (
  <List width="650px">
    <ListItem threeLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Bryan Cranston
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
    <ListItem threeLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Aaron Paul
        <LiTextBody>
          Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.
        </LiTextBody>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem threeLine>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Bob Odenkirk
        <LiTextBody>
          Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".
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
  <ListItem threeLine>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Bryan Cranston
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
  <ListItem threeLine>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Aaron Paul
      <LiTextBody>
        Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.
      </LiTextBody>
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem threeLine>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Bob Odenkirk
      <LiTextBody>
        Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".
      </LiTextBody>
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
</List>`;

export default { demo, caption, code };
