import React from 'react'
import { action } from '@storybook/addon-actions'

import Chip from '..'

export default () => <Chip onClick={action('chip-click')}>Clickable Chip</Chip>
