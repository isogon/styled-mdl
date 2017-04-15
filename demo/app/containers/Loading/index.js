import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import spinner from './demos/spinner';
import singleColorSpinner from './demos/singleColorSpinner';
import progress from './demos/progress';
import indeterminate from './demos/indeterminate';

const title = 'Loading';
const subtitle = 'Indicate loading and progress states.';
const demos = [
  { label: 'Progress Bar', demos: [progress] },
  { demos: [indeterminate] },
  { label: 'Spinners', demos: [spinner, singleColorSpinner] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Snackbar extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
