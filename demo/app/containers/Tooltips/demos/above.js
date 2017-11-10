import React from 'react';

import { Tooltip, Button, Icon } from 'material-components';

const demo = () => (
  <Tooltip message="Follow">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
);

const caption = 'Above';
const code = `<Tooltip text="Follow">
  <Button icon><Icon name="add" /></Button>
</Tooltip>`;

export default { demo, caption, code };
