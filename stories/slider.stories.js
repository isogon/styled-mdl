import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import Default from '../src/components/slider/demos/default.js';
import Disabled from '../src/components/slider/demos/disabled.js';
import StartingValue from '../src/components/slider/demos/startingValue.js';

storiesOf('Slider', module)
  .addDecorator(wrapStory)
  .add('Default', () => <Default />)
  .add('Disabled', () => <Disabled />)
  .add('Starting Value', () => <StartingValue />);
