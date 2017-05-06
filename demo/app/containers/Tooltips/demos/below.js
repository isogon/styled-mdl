import React from 'react';
import MdAdd from 'react-icons/lib/md/add';

import { Tooltip, Button } from 'material-components';

const demo = () => (
  <Tooltip message="Follow" below>
    <Button icon><MdAdd /></Button>
  </Tooltip>
);

const caption = 'Below';
const code = `<Tooltip text="Follow" below>
  <Button icon><MdAdd /></Button>
</Tooltip>`;

export default { demo, caption, code };
