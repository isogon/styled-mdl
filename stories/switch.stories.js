import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Switch from '../src/components/Switch/__demos__/Switch.js'

storiesOf('Switch', module)
  .addDecorator(wrapStory())
  .add('Switch', () => <Switch />)
  .addDecorator(wrapStory({ inverse: true }))
  .add('Switch (inverse)', () => <Switch inverse />)
