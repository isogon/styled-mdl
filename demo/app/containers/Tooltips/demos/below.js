import React from 'react';

import { Tooltip, Button, Icon } from 'material-components';

const demo = () => (
  <Tooltip message="Follow" position="below">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
);

const caption = 'Below';
const code = `<Tooltip text="Follow" position="below">
  <Button icon><Icon name="add" /></Button>
</Tooltip>`;

export default { demo, caption, code };
