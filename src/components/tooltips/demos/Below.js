import React from 'react';

import { Tooltip, Button, Icon } from '../../../';

export default () => (
  <Tooltip message="Follow" position="below">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
);
