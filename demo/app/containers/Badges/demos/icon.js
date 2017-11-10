import React from 'react';
import { Badge, Icon } from 'material-components';

const demo = () => {
  const done = <Icon sm name="done" />;
  return <Badge text={done}>Walk the dog</Badge>;
};
const caption = 'Icon';
const code = `const done = <Icon size="16" name="done" />;
return <Badge text={done}>Walk the dog</Badge>;`;

export default { demo, caption, code };
