import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Fab from '../src/components/Button/__demos__/Fab.js'
import FabAccent from '../src/components/Button/__demos__/FabAccent.js'
import FabDisabled from '../src/components/Button/__demos__/FabDisabled.js'
import FabMini from '../src/components/Button/__demos__/FabMini.js'
import FabPrimary from '../src/components/Button/__demos__/FabPrimary.js'
import Flat from '../src/components/Button/__demos__/Flat.js'
import FlatAccent from '../src/components/Button/__demos__/FlatAccent.js'
import FlatDisabled from '../src/components/Button/__demos__/FlatDisabled.js'
import FlatPrimary from '../src/components/Button/__demos__/FlatPrimary.js'
import Icon from '../src/components/Button/__demos__/Icon.js'
import IconAccent from '../src/components/Button/__demos__/IconAccent.js'
import IconDisabled from '../src/components/Button/__demos__/IconDisabled.js'
import IconMini from '../src/components/Button/__demos__/IconMini.js'
import IconPrimary from '../src/components/Button/__demos__/IconPrimary.js'
import Raised from '../src/components/Button/__demos__/Raised.js'
import RaisedAccent from '../src/components/Button/__demos__/RaisedAccent.js'
import RaisedDisabled from '../src/components/Button/__demos__/RaisedDisabled.js'
import RaisedPrimary from '../src/components/Button/__demos__/RaisedPrimary.js'

storiesOf('Button', module)
  .addDecorator(wrapStory())
  .add('Fab', () => <Fab />)
  .add('Fab Accent', () => <FabAccent />)
  .add('Fab Disabled', () => <FabDisabled />)
  .add('Fab Mini', () => <FabMini />)
  .add('Fab Primary', () => <FabPrimary />)
  .add('Flat', () => <Flat />)
  .add('Flat Accent', () => <FlatAccent />)
  .add('Flat Disabled', () => <FlatDisabled />)
  .add('Flat Primary', () => <FlatPrimary />)
  .add('Icon', () => <Icon />)
  .add('Icon Accent', () => <IconAccent />)
  .add('Icon Disabled', () => <IconDisabled />)
  .add('Icon Mini', () => <IconMini />)
  .add('Icon Primary', () => <IconPrimary />)
  .add('Raised', () => <Raised />)
  .add('Raised Accent', () => <RaisedAccent />)
  .add('Raised Disabled', () => <RaisedDisabled />)
  .add('Raised Primary', () => <RaisedPrimary />)
  .addDecorator(wrapStory({ inverse: true }))
  .add('Fab (inverse)', () => <Fab inverse />)
  .add('Fab Accent (inverse)', () => <FabAccent inverse />)
  .add('Fab Disabled (inverse)', () => <FabDisabled inverse />)
  .add('Fab Mini (inverse)', () => <FabMini inverse />)
  .add('Fab Primary (inverse)', () => <FabPrimary inverse />)
  .add('Flat (inverse)', () => <Flat inverse />)
  .add('Flat Accent (inverse)', () => <FlatAccent inverse />)
  .add('Flat Disabled (inverse)', () => <FlatDisabled inverse />)
  .add('Flat Primary (inverse)', () => <FlatPrimary inverse />)
  .add('Icon (inverse)', () => <Icon inverse />)
  .add('Icon Accent (inverse)', () => <IconAccent inverse />)
  .add('Icon Disabled (inverse)', () => <IconDisabled inverse />)
  .add('Icon Mini (inverse)', () => <IconMini inverse />)
  .add('Icon Primary (inverse)', () => <IconPrimary inverse />)
  .add('Raised (inverse)', () => <Raised inverse />)
  .add('Raised Accent (inverse)', () => <RaisedAccent inverse />)
  .add('Raised Disabled (inverse)', () => <RaisedDisabled inverse />)
  .add('Raised Primary (inverse)', () => <RaisedPrimary inverse />)
