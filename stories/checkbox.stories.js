import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Checkbox from '../src/components/checkbox/demos/Checkbox.js'

storiesOf('Checkbox', module)
  .addDecorator(wrapStory)
  .add('Checkbox', () => <Checkbox />)
