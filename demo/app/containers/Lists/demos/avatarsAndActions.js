import React from 'react';
import {
  List,
  ListItem,
  LiPrimary,
  LiAction,
  LiSecondary,
  LiAvatar,
  Button,
} from 'material-components';
import Star from 'react-icons/lib/md/star';

const demo = () => (
  <List>
    <ListItem>
      <LiPrimary>
        <LiAvatar src="http://bit.ly/2piVFMa" />
        Bryan Cranston
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem>
      <LiPrimary>
        <LiAvatar src="http://bit.ly/2qldLvM" />
        Aaron Paul
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem>
      <LiPrimary>
        <LiAvatar src="http://bit.ly/2qsbwpq" />
        Bob Odenkirk
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent><Star /></Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
  </List>
);
const caption = 'Avatars and controls';
const code = `<List>
  <ListItem>
    <LiPrimary>
      <LiAvatar src="http://bit.ly/2piVFMa" />
      Bryan Cranston
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem>
    <LiPrimary>
      <LiAvatar src="http://bit.ly/2qldLvM" />
      Aaron Paul
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem>
    <LiPrimary>
      <LiAvatar src="http://bit.ly/2qsbwpq" />
      Bob Odenkirk
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Star /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
</List>`;

export default { demo, caption, code };
