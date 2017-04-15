import React from 'react';
import { Radio } from 'material-components';

const demo = () => (
  <Radio name="options" value="1" label="First" defaultChecked />
);

const caption = 'Radio On';
const code = '<Radio name="options" value="1" label="First" defaultChecked />';

export default { demo, caption, code };
