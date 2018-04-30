import React from 'react'

import Button from '../../Button'
import Icon from '../../Icon'
import Tooltip from '..'

export default () => (
  <Tooltip message="Follow" position="left">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
)
