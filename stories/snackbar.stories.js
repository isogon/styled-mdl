import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Snackbar from '../src/components/Snackbar/__demos__/Snackbar.js'
import SnackbarWithAction from '../src/components/Snackbar/__demos__/SnackbarWithAction.js'

storiesOf('Snackbar', module)
  .addDecorator(wrapStory())
  .add('Snackbar', () => <Snackbar />)
  .add('Snackbar With Action', () => <SnackbarWithAction />)
  .addDecorator(wrapStory({ inverse: true }))
  .add('Snackbar (inverse)', () => <Snackbar inverse />)
  .add('Snackbar With Action (inverse)', () => <SnackbarWithAction inverse />)
