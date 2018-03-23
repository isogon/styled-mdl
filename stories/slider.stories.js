import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Default from '../src/components/Slider/__demos__/default.js'
import Disabled from '../src/components/Slider/__demos__/disabled.js'
import StartingValue from '../src/components/Slider/__demos__/startingValue.js'

storiesOf('Slider', module)
  .addDecorator(wrapStory)
  .add('Default', () => <Default />)
  .add('Disabled', () => <Disabled />)
  .add('Starting Value', () => <StartingValue />)
