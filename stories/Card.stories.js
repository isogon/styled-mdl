import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Event from '../src/components/Card/__demos__/Event.js'
import Image from '../src/components/Card/__demos__/Image.js'
import Square from '../src/components/Card/__demos__/Square.js'
import Wide from '../src/components/Card/__demos__/Wide.js'

storiesOf('Card', module)
  .addDecorator(wrapStory())
  .add('Event', () => <Event />)
  .add('Image', () => <Image />)
  .add('Square', () => <Square />)
  .add('Wide', () => <Wide />)
