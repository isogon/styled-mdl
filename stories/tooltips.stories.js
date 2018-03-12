import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import Above from '../src/components/tooltips/demos/Above.js';
import Below from '../src/components/tooltips/demos/Below.js';
import Large from '../src/components/tooltips/demos/Large.js';
import Left from '../src/components/tooltips/demos/Left.js';
import MultiLine from '../src/components/tooltips/demos/MultiLine.js';
import Right from '../src/components/tooltips/demos/Right.js';

storiesOf('Tooltips', module)
  .addDecorator(wrapStory)
  .add('Above', () => <Above />)
  .add('Below', () => <Below />)
  .add('Large', () => <Large />)
  .add('Left', () => <Left />)
  .add('Multi Line', () => <MultiLine />)
  .add('Right', () => <Right />);
