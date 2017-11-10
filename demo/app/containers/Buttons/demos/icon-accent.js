import React from 'react';
import { Button, Icon } from 'material-components';

const demo = () => (
  <Button icon accent>
    <Icon name="add" />
  </Button>
);
const caption = 'Accent Colored Icon';
const code = `/*----- Accent colored icon button -----*/
<Button icon accent><MdAdd /></Button>`;

export default { demo, caption, code };
