import React from 'react';
import { Badge } from 'material-components';
import AccountBox from 'react-icons/lib/md/account-box';
import Done from 'react-icons/lib/md/done';

import styled from 'styled-components';

const AccountBoxIcon = styled(AccountBox)`font-size: 32px`;
const DoneIcon = styled(Done)`font-size: 16px`;

const demo = () => {
  const done = <DoneIcon />;
  return <Badge overlap text={done}><AccountBoxIcon /></Badge>;
};
const caption = 'Icon';
const code = `const done = <DoneIcon />;
return <Badge overlap text={done}>><AccountBoxIcon /></Badge>;`;

export default { demo, caption, code };
