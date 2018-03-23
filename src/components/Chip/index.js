import { compose, setPropTypes, setDisplayName } from 'recompose'
import PropTypes from 'prop-types'
import React from 'react'

import { ChipStyle, ChipText, ChipAction } from './Chip.style'
import proxyStyledStatics from '../../higherOrderComponents/proxyStyledStatics'
import ButtonChip from './ButtonChip'
import ChipContact from './ChipContact'
import Icon from '../Icon'

export const ChipBase = ({
  deletable,
  contact,
  children,
  onClickDelete,
  __StyledComponent__: Styled,
}) => (
  <Styled deletable={deletable} contact={contact}>
    {contact && <ChipContact {...contact} />}
    {children && <ChipText>{children}</ChipText>}
    {deletable && (
      <ChipAction onClick={onClickDelete}>
        <Icon name="cancel" />
      </ChipAction>
    )}
  </Styled>
)

const enhance = compose(
  proxyStyledStatics(ChipStyle),
  setDisplayName('Chip'),
  setPropTypes({
    deletable: PropTypes.bool,
    contact: PropTypes.shape({
      color: PropTypes.string,
      textColor: PropTypes.string,
      text: PropTypes.string,
      src: PropTypes.string,
    }),
    children: PropTypes.node,
    onClickDelete: PropTypes.func,
  }),
)

const Chip = enhance(ChipBase)

Chip.ButtonChip = ButtonChip

export default Chip
