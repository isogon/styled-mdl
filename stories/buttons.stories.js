import React from 'react';
import { storiesOf } from '@storybook/react';
import wrapStory from './decorators/wrapStory';

import Fab from '../src/components/buttons/demos/Fab.js';
import FabAccent from '../src/components/buttons/demos/FabAccent.js';
import FabDisabled from '../src/components/buttons/demos/FabDisabled.js';
import FabMini from '../src/components/buttons/demos/FabMini.js';
import FabPrimary from '../src/components/buttons/demos/FabPrimary.js';
import Flat from '../src/components/buttons/demos/Flat.js';
import FlatAccent from '../src/components/buttons/demos/FlatAccent.js';
import FlatDisabled from '../src/components/buttons/demos/FlatDisabled.js';
import FlatPrimary from '../src/components/buttons/demos/FlatPrimary.js';
import Icon from '../src/components/buttons/demos/Icon.js';
import IconAccent from '../src/components/buttons/demos/IconAccent.js';
import IconDisabled from '../src/components/buttons/demos/IconDisabled.js';
import IconMini from '../src/components/buttons/demos/IconMini.js';
import IconPrimary from '../src/components/buttons/demos/IconPrimary.js';
import Raised from '../src/components/buttons/demos/Raised.js';
import RaisedAccent from '../src/components/buttons/demos/RaisedAccent.js';
import RaisedDisabled from '../src/components/buttons/demos/RaisedDisabled.js';
import RaisedPrimary from '../src/components/buttons/demos/RaisedPrimary.js';

storiesOf('Buttons', module)
  .addDecorator(wrapStory)
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
  .add('Raised Primary', () => <RaisedPrimary />);
