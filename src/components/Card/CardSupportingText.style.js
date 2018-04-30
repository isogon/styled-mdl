import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import themeProps from '../../theme/themeProps'

const CardSupportingText = styled.div`
  color: ${themeProps.textPrimaryOnLight};
  font-size: 0.875rem;
  line-height: 1.4;
  overflow: hidden;
  padding: 1rem;
  width: 90%;
  ${ifProp('border', css`
    border-bottom: 1px solid ${themeProps.divider};
  `)}
`

CardSupportingText.propTypes = {
  border: PropTypes.bool,
}

export default CardSupportingText
