import React from 'react'
import { action } from '@storybook/addon-actions'

import Chip from '..'

export default () => (
  <Chip selected onClick={action('chip-click')}>
    Basic Chip
  </Chip>
)
