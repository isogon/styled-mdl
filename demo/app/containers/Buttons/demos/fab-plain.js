import React from 'react';
import { Button, Icon } from 'material-components';

const demo = () => (
  <Button fab>
    <Icon name="add" />
  </Button>
);
const caption = 'Fab';
const code = `/*----- Fab button -----*/
<Button fab><MdAdd /></Button>`;

export default { demo, caption, code };
