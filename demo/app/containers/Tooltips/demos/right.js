import React from 'react';
import MdAdd from 'react-icons/lib/md/add';

import { Tooltip, Button } from 'material-components';

const demo = () => (
  <Tooltip message="Follow" position="right">
    <Button icon><MdAdd /></Button>
  </Tooltip>
);

const caption = 'Right side';
const code = `<Tooltip text="Follow" position="right">
  <Button icon><MdAdd /></Button>
</Tooltip>`;

export default { demo, caption, code };
