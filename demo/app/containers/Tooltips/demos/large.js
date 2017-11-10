import React from 'react';

import { Tooltip, Button, Icon } from 'material-components';

const demo = () => (
  <Tooltip message="big text" large>
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
);

const caption = 'Large';
const code = `<Tooltip message="Big Text" large>
  <Button icon><Icon name="add" /></Button>
</Tooltip>`;

export default { demo, caption, code };
