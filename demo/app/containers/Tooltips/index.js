import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import above from './demos/above';
import below from './demos/below';
import left from './demos/left';
import right from './demos/right';
import multiLine from './demos/multiLine';
import large from './demos/large';
import delay from './demos/delay';

const title = 'Tooltips';
const subtitle = 'Useful information on hover.';

const demos = [
  { demos: [above, below] },
  { demos: [left, right] },
  { demos: [multiLine, large, delay] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Lists extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
