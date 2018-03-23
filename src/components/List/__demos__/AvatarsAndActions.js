import React from 'react'

import Button from '../../Button'
import Icon from '../../Icon'
import List from '..'

export default () => (
  <List>
    <List.Item>
      <List.Primary>
        <List.Avatar src="http://bit.ly/2piVFMa" />
        Bryan Cranston
      </List.Primary>
      <List.Secondary>
        <List.Action>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </List.Action>
      </List.Secondary>
    </List.Item>
    <List.Item>
      <List.Primary>
        <List.Avatar src="http://bit.ly/2qldLvM" />
        Aaron Paul
      </List.Primary>
      <List.Secondary>
        <List.Action>
          <Button icon accent>
            <Icon name="star" />
          </Button>
        </List.Action>
      </List.Secondary>
    </List.Item>
    <List.Item>
      <List.Primary>
        <List.Avatar src="http://bit.ly/2qsbwpq" />
        Bob Odenkirk
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
