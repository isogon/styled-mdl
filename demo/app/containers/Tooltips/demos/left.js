import React from 'react';

import { Tooltip, Button, Icon } from 'material-components';

const demo = () => (
  <Tooltip message="Follow" position="left">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
);

const caption = 'Left side';
const code = `<Tooltip text="Follow" position="left">
  <Button icon><Icon name="add" /></Button>
</Tooltip>`;

export default { demo, caption, code };
