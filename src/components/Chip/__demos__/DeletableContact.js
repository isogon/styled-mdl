import React from 'react'
import { action } from '@storybook/addon-actions'

import Chip from '..'

export default () => (
  <Chip>
    <Chip.Contact src="https://getmdl.io/templates/dashboard/images/user.jpg" />
    Deletable Contact Chip
    <Chip.Icon right name="cancel" onClick={action('delete-click')} />
  </Chip>
)
