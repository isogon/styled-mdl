import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import snackbar from './demos/snackbar';
import toast from './demos/toast';

const title = 'Snackbar';
const subtitle = 'Transient popup notifications.';
const demos = [{ demos: [snackbar] }, { demos: [toast] }];

// eslint-disable-next-line react/prefer-stateless-function
export default class Snackbar extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
