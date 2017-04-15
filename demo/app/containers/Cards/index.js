import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import wideCard from './demos/wide-card';
import squareCard from './demos/square-card';
import imageCard from './demos/image-card';
import eventCard from './demos/event-card';

const title = 'Cards';
const subtitle = 'Self-contained pieces of paper with data.';
const demos = [
  { demos: [wideCard] },
  { demos: [squareCard] },
  { demos: [imageCard, eventCard] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Cards extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
