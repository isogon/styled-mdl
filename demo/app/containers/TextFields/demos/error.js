import React from 'react';
import { Textfield } from 'material-components';

const demo = () => (
  <Textfield label="Number..." error="Enter a number" value="ABC" />
);
const caption = 'With an error';
const code =
  '<Textfield label="Number..." error="Enter a number" value="ABC" />';

export default { demo, caption, code };
