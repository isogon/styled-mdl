import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import radioOn from './demos/radioOn';
import radioOff from './demos/radioOff';
import checkboxOn from './demos/checkboxOn';
import checkboxOff from './demos/checkboxOff';

const title = 'Toggles';
const subtitle = 'Choose between states.';
const demos = [
  { label: 'Checkbox', demos: [checkboxOn, checkboxOff] },
  { label: 'Radio Buttons', demos: [radioOn, radioOff] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Snackbar extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
