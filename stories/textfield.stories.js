import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Error from '../src/components/Textfield/__demos__/Error.js'
import HelperText from '../src/components/Textfield/__demos__/HelperText.js'
import MultiLine from '../src/components/Textfield/__demos__/MultiLine.js'
import SingleLine from '../src/components/Textfield/__demos__/SingleLine.js'

storiesOf('Textfield', module)
  .addDecorator(wrapStory)
  .add('Error', () => <Error />)
  .add('Helper Text', () => <HelperText />)
  .add('Multi Line', () => <MultiLine />)
  .add('Single Line', () => <SingleLine />)
