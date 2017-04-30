import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import simple from './demos/simple';
import icons from './demos/icons';
import avatarsAndActions from './demos/avatarsAndActions';
import avatarsAndControls from './demos/avatarsAndControls';
import twoLine from './demos/twoLine';
import threeLine from './demos/threeLine';

const title = 'Lists';
const subtitle = 'Customizable scrollable lists.';
const demos = [
  { demos: [simple] },
  { demos: [icons] },
  { demos: [avatarsAndActions] },
  { demos: [avatarsAndControls] },
  { demos: [twoLine] },
  { demos: [threeLine] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Lists extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
