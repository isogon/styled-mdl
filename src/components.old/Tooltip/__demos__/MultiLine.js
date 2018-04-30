import React from 'react'

import Button from '../../Button'
import Icon from '../../Icon'
import Tooltip from '..'

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
