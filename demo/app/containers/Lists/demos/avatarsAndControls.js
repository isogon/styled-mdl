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
  Icon,
} from 'material-components';

const demo = () => (
  <List>
    <ListItem>
      <LiPrimary>
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
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
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
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
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
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
      <LiAvatar><Icon name="person" /></LiAvatar>
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
      <LiAvatar><Icon name="person" /></LiAvatar>
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
      <LiAvatar><Icon name="person" /></LiAvatar>
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
