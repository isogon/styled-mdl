import React from 'react';
import { Button } from 'material-components';
import { MdAdd } from 'react-icons/lib/md';

const demo = <Button fab><MdAdd /></Button>;
const caption = 'Fab';
const code =
`/*----- Fab button -----*/
<Button fab><MdAdd /></Button>`;

export default { demo, caption, code };
