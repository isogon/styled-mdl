import React from 'react';

import { Tooltip, Button } from 'material-components';

const demo = () => (
  <Tooltip message="Too long to fit." delay={1000}>
    <Button>
      Too long to f…
    </Button>
  </Tooltip>
);

const caption = 'With a delay';
const code = `<Tooltip message="Too long to fit." delay={1000}>
  <Button>
    Too long to f…
  </Button>
</Tooltip>`;

export default { demo, caption, code };
