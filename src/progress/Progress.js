import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withStyle } from '../util';
import {
  ProgressBaseStyle,
  ProgressBar,
  BufferBar,
  AuxBar,
} from './Progress.style';

export const ProgressBase = ({ className, ...props }) => (
  <div className={className}>
    <ProgressBar {...props} />
    <BufferBar {...props} />
    <AuxBar {...props} />
  </div>
);

const enhance = compose(
  withStyle(ProgressBaseStyle),
  setDisplayName('Progress')
);

export default enhance(ProgressBase);
