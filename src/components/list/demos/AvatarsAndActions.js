import React from 'react';
import {
  List,
  ListItem,
  LiPrimary,
  LiAction,
  LiSecondary,
  LiAvatar,
  Button,
  Icon,
} from '../../../';

export default () => (
  <List>
    <ListItem>
      <LiPrimary>
        <LiAvatar src="http://bit.ly/2piVFMa" />
        Bryan Cranston
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent>
            <Icon name="star" />
          </Button>
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
          <Button icon accent>
            <Icon name="star" />
          </Button>
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
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
  </List>
);
