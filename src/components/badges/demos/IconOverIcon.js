import React from 'react';
import { Badge, Icon } from '../../../';

export default () => (
  <Badge overlap text={<Icon sm name="done" />}>
    <Icon lg name="account_box" />
  </Badge>
);
