import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import defaultSlider from './demos/default';
import startingValue from './demos/startingValue';
import disabled from './demos/disabled';

const title = 'Sliders';
const subtitle = 'Selecting a value out of a range.';

const demos = [
  { demos: [defaultSlider, startingValue] },
  { demos: [disabled] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Lists extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
