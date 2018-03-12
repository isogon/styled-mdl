import React from 'react';
import { Radio } from '../../../';

export default () => (
  <React.Fragment>
    <Radio name="options" value="1" label="First" defaultChecked />
    <Radio name="options" value="2" label="Second" />
  </React.Fragment>
);
