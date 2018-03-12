import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import LowerLeft from '../src/components/menu/demos/LowerLeft.js';
import LowerRight from '../src/components/menu/demos/LowerRight.js';
import UpperLeft from '../src/components/menu/demos/UpperLeft.js';
import UpperRight from '../src/components/menu/demos/UpperRight.js';

storiesOf('Menu', module)
  .addDecorator(wrapStory)
  .add('Lower Left', () => <LowerLeft />)
  .add('Lower Right', () => <LowerRight />)
  .add('Upper Left', () => <UpperLeft />)
  .add('Upper Right', () => <UpperRight />);
