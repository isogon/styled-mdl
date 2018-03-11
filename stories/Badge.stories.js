import React from 'react';

import { storiesOf } from '@storybook/react';

import { Badge } from '../src/badges';
import { Button } from '../src/buttons';
import { Icon } from '../src/icons';
import wrapStory from './wrapStory';

storiesOf('Badge', module)
  .addDecorator(wrapStory)
  .add('number on text', () => <Badge text="4">Inbox</Badge>)
  .add('number on icon', () => (
    <Badge overlap text="7">
      <Icon lg name="account_box" />
    </Badge>
  ))
  .add('icon an text', () => (
    <Badge text={<Icon sm name="done" />}>Walk the dog</Badge>
  ))
  .add('icon an icon', () => (
    <Badge overlap text={<Icon sm name="done" />}>
      <Icon lg name="account_box" />
    </Badge>
  ))
  .add('with a button', () => (
    <Badge forButton text="7">
      <Button>Inbox</Button>
    </Badge>
  ));
