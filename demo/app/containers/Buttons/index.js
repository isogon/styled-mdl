import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import fabPlain from './demos/fab-plain';
import fabColored from './demos/fab-colored';
import fabDisabled from './demos/fab-disabled';
import fabMini from './demos/fab-mini';

import raisedDefault from './demos/raised-default';
import raisedColored from './demos/raised-colored';
import raisedAccent from './demos/raised-accent';

import flatDefault from './demos/flat-default';
import flatColored from './demos/flat-colored';
import flatAccent from './demos/flat-accent';

import iconDefault from './demos/icon-default';
import iconColored from './demos/icon-colored';
import iconAccent from './demos/icon-accent';

const title = 'Buttons';
const subtitle = 'Variations on Material Design buttons.';
const demos = [
  [fabPlain, fabColored, fabDisabled, fabMini],
  [raisedDefault, raisedColored, raisedAccent],
  [flatDefault, flatColored, flatAccent],
  [iconDefault, iconColored, iconAccent],
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Buttons extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
