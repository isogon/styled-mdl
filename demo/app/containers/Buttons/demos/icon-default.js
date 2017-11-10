import React from 'react';
import { Button, Icon } from 'material-components';

const demo = () => (
  <Button icon>
    <Icon name="add" />
  </Button>
);
const caption = 'Icon Button';
const code = `/*----- Icon button -----*/
<Button icon><MdAdd /></Button>`;

export default { demo, caption, code };
