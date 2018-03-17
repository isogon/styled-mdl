import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Snackbar from '../src/components/snackbar/demos/Snackbar.js'
import SnackbarWithAction from '../src/components/snackbar/demos/SnackbarWithAction.js'

storiesOf('Snackbar', module)
  .addDecorator(wrapStory)
  .add('Snackbar', () => <Snackbar />)
  .add('Snackbar With Action', () => <SnackbarWithAction />)
