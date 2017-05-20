import React from 'react';
import { Textfield } from 'material-components';

const demo = () => (
  <Textfield label="Number..." error="Enter a number" defaultValue="ABC" />
);
const caption = 'With an error';
const code =
  '<Textfield label="Number..." error="Enter a number" defaultValue="ABC" />';

export default { demo, caption, code };
