import React from 'react'

import { Tooltip, Button, Icon } from '../../../'

export default () => (
  <Tooltip
    message={
      <span>
        Share content on <br /> social media
      </span>
    }
  >
    <Button icon>
      <Icon name="share" />
    </Button>
  </Tooltip>
)
