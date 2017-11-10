import React from 'react';
import { List, ListItem, LiIcon, Icon } from 'material-components';

const demo = () => (
  <List>
    <ListItem>
      <LiIcon>
        <Icon name="person" />
      </LiIcon>
      Bryan Cranston
    </ListItem>
    <ListItem>
      <LiIcon>
        <Icon name="person" />
      </LiIcon>
      Aaron Paul
    </ListItem>
    <ListItem>
      <LiIcon>
        <Icon name="person" />
      </LiIcon>
      Bob Odenkirk
    </ListItem>
  </List>
);

const caption = 'Icons';
const code = `<List>
  <ListItem>
    <LiIcon><Icon name="person" /></LiIcon>
    Bryan Cranston
  </ListItem>
  <ListItem>
    <LiIcon><Icon name="person" /></LiIcon>
    Aaron Paul
  </ListItem>
  <ListItem>
    <LiIcon><Icon name="person" /></LiIcon>
    Bob Odenkirk
  </ListItem>
</List>`;

export default { demo, caption, code };
