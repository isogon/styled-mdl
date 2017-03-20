import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import snackbar from './demos/snackbar';
import toast from './demos/toast';
import dismissable from './demos/dismissable';

const title = 'Snackbar';
const subtitle = 'Transient popup notifications.';
const demos = [
  [snackbar],
  [toast],
  [dismissable],
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Snackbar extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
