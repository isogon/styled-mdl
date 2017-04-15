import React from 'react';

import { ProgressBase, ProgressBar, BufferBar, AuxBar } from './Progress.style';

export default function Progress(props) {
  return (
    <ProgressBase {...props}>
      <ProgressBar {...props} />
      <BufferBar {...props} />
      <AuxBar {...props} />
    </ProgressBase>
  );
}
