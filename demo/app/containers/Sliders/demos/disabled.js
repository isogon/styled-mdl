import React from 'react';
import { Slider } from 'material-components';

const demo = () => <Slider min="0" max="100" defaultValue="60" disabled />;

const caption = 'Disabled';
const code = '<Slider min="0" max="100" defaultValue="60" disabled />';

export default { demo, caption, code };
