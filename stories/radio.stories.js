import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import Radio from '../src/components/radio/demos/Radio.js';

storiesOf('Radio', module)
  .addDecorator(wrapStory)
  .add('Radio', () => <Radio />);
