import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import Basic from '../src/components/dialog/demos/Basic.js';
import FullWidthActions from '../src/components/dialog/demos/FullWidthActions.js';

storiesOf('Dialog', module)
  .addDecorator(wrapStory)
  .add('Basic', () => <Basic />)
  .add('Full Width Actions', () => <FullWidthActions />);
