import React from 'react';
import { Button } from 'material-components';
import { MdAdd } from 'react-icons/lib/md';

const demo = () => <Button fab colored><MdAdd /></Button>;
const caption = 'Colored Fab';
const code =
`/*----- Colored fab button -----*/
<Button fab colored><MdAdd /></Button>`;

export default { demo, caption, code };
