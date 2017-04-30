import React from 'react';
import {
  List,
  ListItem,
  LiAction,
  LiSecondary,
  LiPrimary,
  LiAvatar,
  Checkbox,
  Radio,
  Switch,
} from 'material-components';
import Person from 'react-icons/lib/md/person';

const demo = () => (
  <List>
    <ListItem>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Bryan Cranston
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Checkbox defaultChecked />
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Aaron Paul
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Radio />
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        Bob Odenkirk
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Switch defaultChecked />
        </LiAction>
      </LiSecondary>
    </ListItem>
  </List>
);
const caption = 'Avatars and controls';
const code = `<List>
  <ListItem>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Bryan Cranston
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Checkbox defaultChecked />
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Aaron Paul
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Radio />
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem>
    <LiPrimary>
      <LiAvatar><Person /></LiAvatar>
      Bob Odenkirk
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Switch defaultChecked />
      </LiAction>
    </LiSecondary>
  </ListItem>
</List>`;

export default { demo, caption, code };
