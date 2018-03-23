import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Basic from '../src/components/Chip/__demos__/Basic.js'
import Button from '../src/components/Chip/__demos__/Button.js'
import Contact from '../src/components/Chip/__demos__/Contact.js'
import Deletable from '../src/components/Chip/__demos__/Deletable.js'
import DeletableContact from '../src/components/Chip/__demos__/DeletableContact.js'

storiesOf('Chip', module)
  .addDecorator(wrapStory)
  .add('Basic', () => <Basic />)
  .add('Button', () => <Button />)
  .add('Contact', () => <Contact />)
  .add('Deletable', () => <Deletable />)
  .add('Deletable Contact', () => <DeletableContact />)
