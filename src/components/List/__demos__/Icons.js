import React from 'react'

import Icon from '../../Icon'
import List from '..'

export default () => (
  <List>
    <List.Item>
      <List.Icon>
        <Icon name="person" />
      </List.Icon>
      Bryan Cranston
    </List.Item>
    <List.Item>
      <List.Icon>
        <Icon name="person" />
      </List.Icon>
      Aaron Paul
    </List.Item>
    <List.Item>
      <List.Icon>
        <Icon name="person" />
      </List.Icon>
      Bob Odenkirk
    </List.Item>
  </List>
)
