import React from 'react'

import Button from '../../Button'
import Icon from '../../Icon'
import Tooltip from '..'

export default () => (
  <Tooltip message="big text" large>
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
)
