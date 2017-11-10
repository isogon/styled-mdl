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
} from 'material-components';

const demo = () => (
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
const caption = 'Two line';
const code = `<List>
  <ListItem twoLine>
    <LiPrimary>
      <LiAvatar><Icon name="person" /></LiAvatar>
      Bryan Cranston
      <LiSubTitle>62 Episodes</LiSubTitle>
    </LiPrimary>
    <LiSecondary>
      <LiInfo>Actor</LiInfo>
      <LiAction>
        <Button icon accent><Icon name="star" /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem twoLine>
    <LiPrimary>
      <LiAvatar><Icon name="person" /></LiAvatar>
      Aaron Paul
      <LiSubTitle>62 Episodes</LiSubTitle>
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Icon name="star" /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
  <ListItem twoLine>
    <LiPrimary>
      <LiAvatar><Icon name="person" /></LiAvatar>
      Bob Odenkirk
      <LiSubTitle>62 Episodes</LiSubTitle>
    </LiPrimary>
    <LiSecondary>
      <LiAction>
        <Button icon accent><Icon name="star" /></Button>
      </LiAction>
    </LiSecondary>
  </ListItem>
</List>`;

export default { demo, caption, code };
