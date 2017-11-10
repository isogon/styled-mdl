import React from 'react';
import { Badge, Icon } from 'material-components';

const demo = () => {
  const done = <Icon sm name="done" />;
  return (
    <Badge overlap text={done}>
      <Icon lg name="account_box" />
    </Badge>
  );
};
const caption = 'Icon';
const code = `const done = <Icon size="16" name="done" />;
return <Badge overlap text={done}><Icon size="32" name="account_box" /></Badge>;`;

export default { demo, caption, code };
