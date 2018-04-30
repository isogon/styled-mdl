import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Basic from '../src/components/Chip/__demos__/Basic.js'
import Clickable from '../src/components/Chip/__demos__/Clickable.js'
import ClickableAndDeletable from '../src/components/Chip/__demos__/ClickableAndDeletable.js'
import Contact from '../src/components/Chip/__demos__/Contact.js'
import Deletable from '../src/components/Chip/__demos__/Deletable.js'
import DeletableContact from '../src/components/Chip/__demos__/DeletableContact.js'
import Selected from '../src/components/Chip/__demos__/Selected.js'
import WithIcon from '../src/components/Chip/__demos__/WithIcon.js'

storiesOf('Chip', module)
  .addDecorator(wrapStory())
  .add('Basic', () => <Basic />)
  .add('Clickable', () => <Clickable />)
  .add('Clickable And Deletable', () => <ClickableAndDeletable />)
  .add('Contact', () => <Contact />)
  .add('Deletable', () => <Deletable />)
  .add('Deletable Contact', () => <DeletableContact />)
  .add('Selected', () => <Selected />)
  .add('With Icon', () => <WithIcon />)
