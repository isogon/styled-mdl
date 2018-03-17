import React from 'react'

import { Tooltip, Button, Icon } from '../../../'

export default () => (
  <Tooltip message="big text" large>
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
)
