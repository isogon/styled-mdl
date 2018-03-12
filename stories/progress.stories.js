import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import Progress from '../src/components/progress/demos/Progress.js';
import ProgressIndeterminate from '../src/components/progress/demos/ProgressIndeterminate.js';

storiesOf('Progress', module)
  .addDecorator(wrapStory)
  .add('Progress', () => <Progress />)
  .add('Progress Indeterminate', () => <ProgressIndeterminate />);
