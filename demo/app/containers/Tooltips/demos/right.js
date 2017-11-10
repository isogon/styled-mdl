import React from 'react';

import { Tooltip, Button, Icon } from 'material-components';

const demo = () => (
  <Tooltip message="Follow" position="right">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
);

const caption = 'Right side';
const code = `<Tooltip text="Follow" position="right">
  <Button icon><Icon name="add" /></Button>
</Tooltip>`;

export default { demo, caption, code };
