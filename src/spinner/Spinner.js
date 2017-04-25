import React from 'react';
import {
  Spinner as SpinnerStyle,
  LayerOne,
  LayerTwo,
  LayerThree,
  LayerFour,
  GapPatch,
  CircleClipper,
  Circle,
} from './Spinner.style';

export const Layer = ({ level: Level, ...props }) => (
  <Level {...props}>
    <CircleClipper left>
      <Circle left clipper {...props} />
    </CircleClipper>
    <GapPatch>
      <Circle gap />
    </GapPatch>
    <CircleClipper right>
      <Circle right clipper {...props} />
    </CircleClipper>
  </Level>
);

Layer.propTypes = {
  level: React.PropTypes.any,
};

export default function Spinner(props) {
  return (
    <SpinnerStyle {...props}>
      <Layer level={LayerOne} {...props} />
      <Layer level={LayerTwo} {...props} />
      <Layer level={LayerThree} {...props} />
      <Layer level={LayerFour} {...props} />
    </SpinnerStyle>
  );
}
