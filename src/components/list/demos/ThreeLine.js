import React from 'react'
import {
  List,
  ListItem,
  LiPrimary,
  LiSecondary,
  LiAvatar,
  LiAction,
  LiTextBody,
  Button,
  Icon,
} from '../../../'

export default () => (
  <List width="650px">
    <ListItem threeLine>
      <LiPrimary>
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
        Bryan Cranston
        <LiTextBody>
          Bryan Cranston played the role of Walter in Breaking Bad. He is also
          known for playing Hal in Malcom in the Middle.
        </LiTextBody>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem threeLine>
      <LiPrimary>
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
        Aaron Paul
        <LiTextBody>
          Aaron Paul played the role of Jesse in Breaking Bad. He also featured
          in the "Need For Speed" Movie.
        </LiTextBody>
      </LiPrimary>
      <LiSecondary>
        <LiAction>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </LiAction>
      </LiSecondary>
    </ListItem>
    <ListItem threeLine>
      <LiPrimary>
        <LiAvatar>
          <Icon name="person" />
        </LiAvatar>
        Bob Odenkirk
        <LiTextBody>
          Bob Odinkrik played the role of Saul in Breaking Bad. Due to public
          fondness for the character, Bob stars in his own show now, called
          "Better Call Saul".
        </LiTextBody>
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
)
