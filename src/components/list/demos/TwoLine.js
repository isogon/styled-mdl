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
  Icon,
} from '../../../';

export default () => (
  <List>
    <ListItem twoLine>
      <LiPrimary>
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
        Bryan Cranston
        <LiSubTitle>62 Episodes</LiSubTitle>
      </LiPrimary>
      <LiSecondary>
        <LiInfo>Actor</LiInfo>
        <LiAction>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem twoLine>
      <LiPrimary>
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
        Aaron Paul
        <LiSubTitle>62 Episodes</LiSubTitle>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem twoLine>
      <LiPrimary>
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
        Bob Odenkirk
        <LiSubTitle>62 Episodes</LiSubTitle>
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
