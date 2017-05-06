import React from 'react';
import { Slider } from 'material-components';

const demo = () => <Slider min={50} max={100} defaultValue={70} />;

const caption = 'Starting value';
const code = '<Slider min={50} max={100} defaultValue={70} />';

export default { demo, caption, code };
