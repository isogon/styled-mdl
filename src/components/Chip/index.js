import PropTypes from 'prop-types'

import { ChipIcon, ChipContact, ChipStyle } from './Chip.style'
import withRipple from '../../higherOrderComponents/withRipple'

const Chip = withRipple({ dark: true })(ChipStyle)

Chip.Icon = ChipIcon
Chip.Contact = ChipContact

Chip.Contact.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  src: PropTypes.string,
}

export default Chip
