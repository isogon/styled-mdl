import React from 'react';
import { Button } from 'material-components';
import { MdAdd } from 'react-icons/lib/md';

const demo = <Button fab mini><MdAdd /></Button>;
const caption = 'Mini Fab';
const code =
`/*----- Mini fab button -----*/
<Button fab mini><MdAdd /></Button>`;

export default { demo, caption, code };
