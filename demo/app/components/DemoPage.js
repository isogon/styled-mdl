import React, { PropTypes } from 'react';

import Wrap from './Wrap';
import ComponentTitle from './ComponentTitle';
import DemoGroup from './DemoGroup';

const DemoPage = ({ title, subtitle, demoGroups, children }) => (
  <Wrap>
    <ComponentTitle title={title} subtitle={subtitle} />
    {demoGroups.map(({ label, demos }, i) => (
      <DemoGroup key={i} demos={demos} label={label} />
    ))}
    {children}
  </Wrap>
);

DemoPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  demoGroups: PropTypes.array,
  children: PropTypes.node,
};

export default DemoPage;
