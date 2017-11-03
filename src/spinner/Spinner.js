import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes, setDisplayName } from 'recompose';

import {
  spinnerStyle,
  LayerOne,
  LayerTwo,
  LayerThree,
  LayerFour,
  GapPatch,
  CircleClipper,
  Circle,
} from './Spinner.style';
import { withStyle } from '../util';

const layers = [LayerOne, LayerTwo, LayerThree, LayerFour];

export const SpinnerBase = ({ className, ...props }) => (
  <div className={className}>
    {layers.map((Layer, i) => (
      <Layer {...props} key={i}>
        <CircleClipper left>
          <Circle left clipper {...props} />
        </CircleClipper>
        <GapPatch>
          <Circle gap />
        </GapPatch>
        <CircleClipper right>
          <Circle right clipper {...props} />
        </CircleClipper>
      </Layer>
    ))}
  </div>
);

const enhance = compose(
  setPropTypes({
    active: PropTypes.bool,
    singleColor: PropTypes.bool,
  }),
  withStyle(spinnerStyle),
  setDisplayName('Spinner')
);

export default enhance(SpinnerBase);
