import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import LowerLeft from '../src/components/Menu/__demos__/LowerLeft.js'
import LowerRight from '../src/components/Menu/__demos__/LowerRight.js'
import UpperLeft from '../src/components/Menu/__demos__/UpperLeft.js'
import UpperRight from '../src/components/Menu/__demos__/UpperRight.js'

storiesOf('Menu', module)
  .addDecorator(wrapStory)
  .add('Lower Left', () => <LowerLeft />)
  .add('Lower Right', () => <LowerRight />)
  .add('Upper Left', () => <UpperLeft />)
  .add('Upper Right', () => <UpperRight />)
