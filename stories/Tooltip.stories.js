import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Above from '../src/components/Tooltip/__demos__/Above.js'
import Below from '../src/components/Tooltip/__demos__/Below.js'
import Large from '../src/components/Tooltip/__demos__/Large.js'
import Left from '../src/components/Tooltip/__demos__/Left.js'
import MultiLine from '../src/components/Tooltip/__demos__/MultiLine.js'
import Right from '../src/components/Tooltip/__demos__/Right.js'

storiesOf('Tooltip', module)
  .addDecorator(wrapStory)
  .add('Above', () => <Above />)
  .add('Below', () => <Below />)
  .add('Large', () => <Large />)
  .add('Left', () => <Left />)
  .add('Multi Line', () => <MultiLine />)
  .add('Right', () => <Right />)
