import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import AvatarsAndActions from '../src/components/List/__demos__/AvatarsAndActions.js'
import AvatarsAndControls from '../src/components/List/__demos__/AvatarsAndControls.js'
import Icons from '../src/components/List/__demos__/Icons.js'
import Simple from '../src/components/List/__demos__/Simple.js'
import ThreeLine from '../src/components/List/__demos__/ThreeLine.js'
import TwoLine from '../src/components/List/__demos__/TwoLine.js'

storiesOf('List', module)
  .addDecorator(wrapStory)
  .add('Avatars And Actions', () => <AvatarsAndActions />)
  .add('Avatars And Controls', () => <AvatarsAndControls />)
  .add('Icons', () => <Icons />)
  .add('Simple', () => <Simple />)
  .add('Three Line', () => <ThreeLine />)
  .add('Two Line', () => <TwoLine />)
