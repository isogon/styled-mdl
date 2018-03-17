import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Error from '../src/components/textfield/demos/Error.js'
import HelperText from '../src/components/textfield/demos/HelperText.js'
import MultiLine from '../src/components/textfield/demos/MultiLine.js'
import SingleLine from '../src/components/textfield/demos/SingleLine.js'

storiesOf('Textfield', module)
  .addDecorator(wrapStory)
  .add('Error', () => <Error />)
  .add('Helper Text', () => <HelperText />)
  .add('Multi Line', () => <MultiLine />)
  .add('Single Line', () => <SingleLine />)
