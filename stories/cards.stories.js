import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Event from '../src/components/cards/demos/Event.js'
import Image from '../src/components/cards/demos/Image.js'
import Square from '../src/components/cards/demos/Square.js'
import Wide from '../src/components/cards/demos/Wide.js'

storiesOf('Cards', module)
  .addDecorator(wrapStory)
  .add('Event', () => <Event />)
  .add('Image', () => <Image />)
  .add('Square', () => <Square />)
  .add('Wide', () => <Wide />)
