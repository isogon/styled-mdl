import React from 'react';
import { Button, Icon } from 'material-components';

const demo = () => (
  <Button fab disabled>
    <Icon name="add" />
  </Button>
);
const caption = 'Disabled';
const code = `/*----- Disabled fab button -----*/
<Button fab disabled><MdAdd /></Button>`;

export default { demo, caption, code };
