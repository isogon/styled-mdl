import { compose, setPropTypes, setDisplayName } from 'recompose'
import PropTypes from 'prop-types'
import React from 'react'

import {
  SpinnerStyle,
  LayerOne,
  LayerTwo,
  LayerThree,
  LayerFour,
  GapPatch,
  CircleClipper,
  Circle,
} from './Spinner.style'
import proxyStyledStatics from '../../higherOrderComponents/proxyStyledStatics'

const layers = [LayerOne, LayerTwo, LayerThree, LayerFour]

export const SpinnerBase = ({ __StyledComponent__: Styled, ...props }) => (
  <Styled {...props}>
    {layers.map((Layer) => (
      <Layer key={Layer.displayName} {...props}>
        <CircleClipper left>
          <Circle {...props} left clipper />
        </CircleClipper>
        <GapPatch>
          <Circle gap />
        </GapPatch>
        <CircleClipper right>
          <Circle {...props} right clipper />
        </CircleClipper>
      </Layer>
    ))}
  </Styled>
)

const enhance = compose(
  proxyStyledStatics(SpinnerStyle),
  setDisplayName('Spinner'),
  setPropTypes({
    active: PropTypes.bool,
    singleColor: PropTypes.bool,
  }),
)

export default enhance(SpinnerBase)
