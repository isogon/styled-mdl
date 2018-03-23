import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Progress from '../src/components/Progress/__demos__/Progress.js'
import ProgressIndeterminate from '../src/components/Progress/__demos__/ProgressIndeterminate.js'

storiesOf('Progress', module)
  .addDecorator(wrapStory)
  .add('Progress', () => <Progress />)
  .add('Progress Indeterminate', () => <ProgressIndeterminate />)
