import React from 'react';

import { Tooltip, Button, Icon } from 'material-components';

const demo = () => (
  <Tooltip
    message={
      <span>
        Share content on <br /> social media
      </span>
    }
  >
    <Button icon>
      <Icon name="share" />
    </Button>
  </Tooltip>
);

const caption = 'Multiple lines';
const code = `<Tooltip text="Follow">
  <Button icon><Icon name="share" /></Button>
</Tooltip>`;

export default { demo, caption, code };
