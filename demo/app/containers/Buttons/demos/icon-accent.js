import React from 'react';
import { Button } from 'material-components';
import { MdAdd } from 'react-icons/lib/md';

const demo = <Button icon accent><MdAdd /></Button>;
const caption = 'Accent Colored Icon';
const code =
`/*----- Accent colored icon button -----*/
<Button icon accent><MdAdd /></Button>`;

export default { demo, caption, code };
