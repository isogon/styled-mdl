import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import AvatarsAndActions from '../src/components/list/demos/AvatarsAndActions.js';
import AvatarsAndControls from '../src/components/list/demos/AvatarsAndControls.js';
import Icons from '../src/components/list/demos/Icons.js';
import Simple from '../src/components/list/demos/Simple.js';
import ThreeLine from '../src/components/list/demos/ThreeLine.js';
import TwoLine from '../src/components/list/demos/TwoLine.js';

storiesOf('List', module)
  .addDecorator(wrapStory)
  .add('Avatars And Actions', () => <AvatarsAndActions />)
  .add('Avatars And Controls', () => <AvatarsAndControls />)
  .add('Icons', () => <Icons />)
  .add('Simple', () => <Simple />)
  .add('Three Line', () => <ThreeLine />)
  .add('Two Line', () => <TwoLine />);
