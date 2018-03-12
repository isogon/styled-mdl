import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import IconOverIcon from '../src/components/badges/demos/IconOverIcon.js';
import IconOverText from '../src/components/badges/demos/IconOverText.js';
import NumberOverIcon from '../src/components/badges/demos/NumberOverIcon.js';
import NumberOverText from '../src/components/badges/demos/NumberOverText.js';
import TextOverButton from '../src/components/badges/demos/TextOverButton.js';

storiesOf('Badges', module)
  .addDecorator(wrapStory)
  .add('Icon Over Icon', () => <IconOverIcon />)
  .add('Icon Over Text', () => <IconOverText />)
  .add('Number Over Icon', () => <NumberOverIcon />)
  .add('Number Over Text', () => <NumberOverText />)
  .add('Text Over Button', () => <TextOverButton />);
