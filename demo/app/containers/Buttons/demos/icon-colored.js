import React from 'react';
import { Button, Icon } from 'material-components';

const demo = () => (
  <Button icon primary>
    <Icon name="add" />
  </Button>
);
const caption = 'Colored Icon';
const code = `/*----- Primary colored icon button -----*/
<Button icon primary><MdAdd /></Button>`;

export default { demo, caption, code };
