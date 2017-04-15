import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import radioOn from './demos/radioOn';
import radioOff from './demos/radioOff';

const title = 'Toggles';
const subtitle = 'Choose between states.';
const demos = [{ label: 'Radio Buttons', demos: [radioOn, radioOff] }];

// eslint-disable-next-line react/prefer-stateless-function
export default class Snackbar extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
