import React from 'react'
import { storiesOf } from '@storybook/react'
import wrapStory from './decorators/wrapStory'

import Fab from '../src/components/Button/__demos__/Fab.js'
import FabDisabled from '../src/components/Button/__demos__/FabDisabled.js'
import FabMini from '../src/components/Button/__demos__/FabMini.js'
import FabPrimary from '../src/components/Button/__demos__/FabPrimary.js'
import FabSecondary from '../src/components/Button/__demos__/FabSecondary.js'
import Flat from '../src/components/Button/__demos__/Flat.js'
import FlatDisabled from '../src/components/Button/__demos__/FlatDisabled.js'
import FlatPrimary from '../src/components/Button/__demos__/FlatPrimary.js'
import FlatSecondary from '../src/components/Button/__demos__/FlatSecondary.js'
import Icon from '../src/components/Button/__demos__/Icon.js'
import IconDisabled from '../src/components/Button/__demos__/IconDisabled.js'
import IconMini from '../src/components/Button/__demos__/IconMini.js'
import IconPrimary from '../src/components/Button/__demos__/IconPrimary.js'
import IconSecondary from '../src/components/Button/__demos__/IconSecondary.js'
import Raised from '../src/components/Button/__demos__/Raised.js'
import RaisedDisabled from '../src/components/Button/__demos__/RaisedDisabled.js'
import RaisedPrimary from '../src/components/Button/__demos__/RaisedPrimary.js'
import RaisedSecondary from '../src/components/Button/__demos__/RaisedSecondary.js'

storiesOf('Button', module)
  .addDecorator(wrapStory())
  .add('Fab', () => <Fab />)
  .add('Fab Disabled', () => <FabDisabled />)
  .add('Fab Mini', () => <FabMini />)
  .add('Fab Primary', () => <FabPrimary />)
  .add('Fab Secondary', () => <FabSecondary />)
  .add('Flat', () => <Flat />)
  .add('Flat Disabled', () => <FlatDisabled />)
  .add('Flat Primary', () => <FlatPrimary />)
  .add('Flat Secondary', () => <FlatSecondary />)
  .add('Icon', () => <Icon />)
  .add('Icon Disabled', () => <IconDisabled />)
  .add('Icon Mini', () => <IconMini />)
  .add('Icon Primary', () => <IconPrimary />)
  .add('Icon Secondary', () => <IconSecondary />)
  .add('Raised', () => <Raised />)
  .add('Raised Disabled', () => <RaisedDisabled />)
  .add('Raised Primary', () => <RaisedPrimary />)
  .add('Raised Secondary', () => <RaisedSecondary />)
