import React from 'react';
import { Button } from 'material-components';
import { MdAdd } from 'react-icons/lib/md';

const demo = <Button icon><MdAdd /></Button>;
const caption = 'Icon Button';
const code =
`/*----- Icon button -----*/
<Button icon><MdAdd /></Button>`;

export default { demo, caption, code };
