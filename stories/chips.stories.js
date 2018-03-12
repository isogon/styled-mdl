import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import Basic from '../src/components/chips/demos/Basic.js';
import Button from '../src/components/chips/demos/Button.js';
import Contact from '../src/components/chips/demos/Contact.js';
import Deletable from '../src/components/chips/demos/Deletable.js';
import DeletableContact from '../src/components/chips/demos/DeletableContact.js';

storiesOf('Chips', module)
  .addDecorator(wrapStory)
  .add('Basic', () => <Basic />)
  .add('Button', () => <Button />)
  .add('Contact', () => <Contact />)
  .add('Deletable', () => <Deletable />)
  .add('Deletable Contact', () => <DeletableContact />);
