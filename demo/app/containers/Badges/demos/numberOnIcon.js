import React from 'react';
import { Badge } from 'material-components';
import AccountBox from 'react-icons/lib/md/account-box';
import styled from 'styled-components';

const AccountBoxIcon = styled(AccountBox)`font-size: 32px`;

const demo = () => <Badge overlap text="4"><AccountBoxIcon /></Badge>;
const caption = 'Number';
const code = '<Badge text="4"><AccountBox /></Badge>';

export default { demo, caption, code };
