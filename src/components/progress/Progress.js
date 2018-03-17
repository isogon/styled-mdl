import { compose, setDisplayName } from 'recompose'
import React from 'react'

import {
  ProgressBaseStyle,
  ProgressBar,
  BufferBar,
  AuxBar,
} from './Progress.style'
import { proxyStyledStatics } from '../../hocs'

export const ProgressBase = ({
  indeterminate,
  percent,
  width,
  __StyledComponent__: Styled,
}) => (
  <Styled width={width}>
    <ProgressBar indeterminate={indeterminate} percent={percent} />
    <BufferBar indeterminate={indeterminate} percent={percent} />
    <AuxBar indeterminate={indeterminate} percent={percent} />
  </Styled>
)

const enhance = compose(
  proxyStyledStatics(ProgressBaseStyle),
  setDisplayName('Progress'),
)

export default enhance(ProgressBase)
