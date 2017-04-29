import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import radioOn from './demos/radioOn';
import radioOff from './demos/radioOff';
import checkboxOn from './demos/checkboxOn';
import checkboxOff from './demos/checkboxOff';
import switchOn from './demos/switchOn';
import switchOff from './demos/switchOff';

const title = 'Toggles';
const subtitle = 'Choose between states.';
const demos = [
  { label: 'Checkbox', demos: [checkboxOff, checkboxOn] },
  { label: 'Radio Buttons', demos: [radioOn, radioOff] },
  { label: 'Switches', demos: [switchOn, switchOff] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Snackbar extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
