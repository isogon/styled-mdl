import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Spinner from '../src/components/Spinner/__demos__/Spinner.js'
import SpinnerSingleColor from '../src/components/Spinner/__demos__/SpinnerSingleColor.js'

storiesOf('Spinner', module)
  .addDecorator(wrapStory())
  .add('Spinner', () => <Spinner />)
  .add('Spinner Single Color', () => <SpinnerSingleColor />)
  .addDecorator(wrapStory({ inverse: true }))
  .add('Spinner (inverse)', () => <Spinner inverse />)
  .add('Spinner Single Color (inverse)', () => <SpinnerSingleColor inverse />)
