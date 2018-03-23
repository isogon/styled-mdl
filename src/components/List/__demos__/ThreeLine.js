import React from 'react'

import Button from '../../Button'
import Icon from '../../Icon'
import List from '..'

export default () => (
  <List width="650px">
    <List.Item threeLine>
      <List.Primary>
        <List.Avatar>
          <Icon name="person" />
        </List.Avatar>
        Bryan Cranston
        <List.TextBody>
          Bryan Cranston played the role of Walter in Breaking Bad. He is also
          known for playing Hal in Malcom in the Middle.
        </List.TextBody>
      </List.Primary>
      <List.Secondary>
        <List.Action>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </List.Action>
      </List.Secondary>
    </List.Item>
    <List.Item threeLine>
      <List.Primary>
        <List.Avatar>
          <Icon name="person" />
        </List.Avatar>
        Aaron Paul
        <List.TextBody>
          Aaron Paul played the role of Jesse in Breaking Bad. He also featured
          in the "Need For Speed" Movie.
        </List.TextBody>
      </List.Primary>
      <List.Secondary>
        <List.Action>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </List.Action>
      </List.Secondary>
    </List.Item>
    <List.Item threeLine>
      <List.Primary>
        <List.Avatar>
          <Icon name="person" />
        </List.Avatar>
        Bob Odenkirk
        <List.TextBody>
          Bob Odinkrik played the role of Saul in Breaking Bad. Due to public
          fondness for the character, Bob stars in his own show now, called
          "Better Call Saul".
        </List.TextBody>
      </List.Primary>
      <List.Secondary>
        <List.Action>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </List.Action>
      </List.Secondary>
    </List.Item>
  </List>
)
