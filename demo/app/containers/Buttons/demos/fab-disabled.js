import React from 'react';
import { Button } from 'material-components';
import { MdAdd } from 'react-icons/lib/md';

const demo = <Button fab disabled><MdAdd /></Button>;
const caption = 'Disabled';
const code =
`/*----- Disabled fab button -----*/
<Button fab disabled><MdAdd /></Button>`;

export default { demo, caption, code };
