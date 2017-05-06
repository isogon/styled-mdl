import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import dataTable from './demos/dataTable';

const title = 'Tables';
const subtitle = 'Organize data.';

const demos = [{ demos: [dataTable] }];

// eslint-disable-next-line react/prefer-stateless-function
export default class Lists extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
