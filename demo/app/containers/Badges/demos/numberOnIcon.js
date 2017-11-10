import React from 'react';

import { Badge, Icon } from 'material-components';

const demo = () => (
  <Badge overlap text="4">
    <Icon lg name="account_box" />
  </Badge>
);
const caption = 'Number';
const code = '<Badge overlap text="4"><Icon lg name="account_box" /></Badge>';

export default { demo, caption, code };
