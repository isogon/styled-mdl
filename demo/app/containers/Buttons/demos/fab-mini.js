import React from 'react';
import { Button, Icon } from 'material-components';

const demo = () => (
  <Button fab mini>
    <Icon name="add" />
  </Button>
);
const caption = 'Mini Fab';
const code = `/*----- Mini fab button -----*/
<Button fab mini><MdAdd /></Button>`;

export default { demo, caption, code };
