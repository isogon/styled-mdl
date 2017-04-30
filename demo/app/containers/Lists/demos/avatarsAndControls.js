import React from 'react';
import {
  List,
  ListItem,
  LiPrimary,
  LiAction,
  LiSecondary,
  LiAvatar,
  LiTitle,
  Checkbox,
} from 'material-components';
import Person from 'react-icons/lib/md/person';

const demo = () => (
  <List>
    <ListItem>
      <LiPrimary>
        <LiAvatar><Person /></LiAvatar>
        <LiTitle>Bryan Cranston</LiTitle>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Checkbox defaultChecked />
        </LiAction>
      </LiSecondary>
    </ListItem>
  </List>
);
const caption = 'Avatars and controls';
const code = `<List>
  <ListItem>
    <ListItemContent>
      <ListItemAvatar icon={Person} />
      Bryan Cranston
    </ListItemContent>
    <ListItemAction>
      <Checkbox checked />
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent>
      <ListItemAvatar icon={Person} />
      Aaron Paul
    </ListItemContent>
    <ListItemAction>
      <Radio />
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent>
      <ListItemAvatar icon={Person} />
      Bob Odenkirk
    </ListItemContent>
    <ListItemAction>
      <Switch checked />
    </ListItemAction>
  </ListItem>
</List>`;

export default { demo, caption, code };
