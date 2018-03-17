import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Switch from '../src/components/switch/demos/Switch.js'

storiesOf('Switch', module)
  .addDecorator(wrapStory)
  .add('Switch', () => <Switch />)
