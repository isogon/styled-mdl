import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Basic from '../src/components/Dialog/__demos__/Basic.js'
import FullWidthActions from '../src/components/Dialog/__demos__/FullWidthActions.js'

storiesOf('Dialog', module)
  .addDecorator(wrapStory())
  .add('Basic', () => <Basic />)
  .add('Full Width Actions', () => <FullWidthActions />)
  .addDecorator(wrapStory({ inverse: true }))
  .add('Basic (inverse)', () => <Basic inverse />)
  .add('Full Width Actions (inverse)', () => <FullWidthActions inverse />)
