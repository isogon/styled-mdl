import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import basic from './demos/basic';

const title = 'Dialog';
const subtitle = 'Modal windows for dedicated user input.';
const demos = [{ demos: [basic] }];

// eslint-disable-next-line react/prefer-stateless-function
export default class Snackbar extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
