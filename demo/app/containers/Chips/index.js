import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import basic from './demos/basic';
import deletable from './demos/deletable';
import button from './demos/button';
import contact from './demos/contact';
import deletableContact from './demos/deletableContact';

const title = 'Chips';
const subtitle = 'Represents complex entities in small blocks.';
const demos = [
  { demos: [basic, deletable, button] },
  { demos: [contact, deletableContact] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Chips extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
