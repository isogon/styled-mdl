import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import numberOnIcon from './demos/numberOnIcon';
import iconOnIcon from './demos/iconOnIcon';
import number from './demos/number';
import icon from './demos/icon';
import button from './demos/button';

const title = 'Badges';
const subtitle = 'Small status descriptors for UI elements.';
const demos = [
  { demos: [numberOnIcon, iconOnIcon] },
  { demos: [number, icon] },
  { demos: [button] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Chips extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
