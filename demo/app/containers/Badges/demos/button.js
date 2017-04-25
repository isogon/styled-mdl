import React from 'react';
import { Badge, Button } from 'material-components';

const demo = () => <Badge forButton text="7"><Button>Inbox</Button></Badge>;
const caption = 'With a button';
const code = '<Badge forButton text="7"><Button raised>Inbox</Button></Badge>';

export default { demo, caption, code };
