import React from 'react';
import MdAdd from 'react-icons/lib/md/add';

import { Tooltip, Button } from 'material-components';

const demo = () => (
  <Tooltip message="big text" large>
    <Button icon><MdAdd /></Button>
  </Tooltip>
);

const caption = 'Large';
const code = `<Tooltip message="Big Text" large>
  <Button icon><MdAdd /></Button>
</Tooltip>`;

export default { demo, caption, code };
