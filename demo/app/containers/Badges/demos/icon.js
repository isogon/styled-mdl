import React from 'react';
import { Badge } from 'material-components';
import Done from 'react-icons/lib/md/done';

import styled from 'styled-components';

const DoneIcon = styled(Done)`font-size: 16px`;

const demo = () => {
  const done = <DoneIcon />;
  return <Badge text={done}>Walk the dog</Badge>;
};
const caption = 'Icon';
const code = `const done = <DoneIcon />;
return <Badge text={done}>Walk the dog</Badge>;`;

export default { demo, caption, code };
