import React from 'react'

import Button from '../../Button'
import Icon from '../../Icon'
import List from '..'

export default () => (
  <List>
    <List.Item twoLine>
      <List.Primary>
        <List.Avatar>
          <Icon name="person" />
        </List.Avatar>
        Bryan Cranston
        <List.SubTitle>62 Episodes</List.SubTitle>
      </List.Primary>
      <List.Secondary>
        <List.Info>Actor</List.Info>
        <List.Action>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </List.Action>
      </List.Secondary>
    </List.Item>
    <List.Item twoLine>
      <List.Primary>
        <List.Avatar>
          <Icon name="person" />
        </List.Avatar>
        Aaron Paul
        <List.SubTitle>62 Episodes</List.SubTitle>
      </List.Primary>
      <List.Secondary>
        <List.Action>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </List.Action>
      </List.Secondary>
    </List.Item>
    <List.Item twoLine>
      <List.Primary>
        <List.Avatar>
          <Icon name="person" />
        </List.Avatar>
        Bob Odenkirk
        <List.SubTitle>62 Episodes</List.SubTitle>
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
