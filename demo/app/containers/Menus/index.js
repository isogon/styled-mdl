import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import lowerLeft from './demos/lowerLeft';
import lowerRight from './demos/lowerRight';
import upperLeft from './demos/upperLeft';
import upperRight from './demos/upperRight';

const title = 'Lists';
const subtitle = 'Customizable scrollable lists.';

const demos = [
  { demos: [lowerLeft, lowerRight] },
  { demos: [upperLeft, upperRight] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Lists extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
