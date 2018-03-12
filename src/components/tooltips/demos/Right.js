import React from 'react';

import { Tooltip, Button, Icon } from '../../../';

export default () => (
  <Tooltip message="Follow" position="right">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
);
