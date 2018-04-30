import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import themeProps from '../../theme/themeProps'

const CardTitle = styled.header`
  align-items: center;
  color: ${themeProps.textPrimaryOnLight};
  display: block;
  display: flex;
  line-height: normal;
  padding: 1rem;
  box-sizing: border-box;
  ${ifProp('border', css`
    border-bottom: 1px solid ${themeProps.divider};
  `)}
  ${ifProp('expand', css`
    flex-grow: 1;
  `)}
`

CardTitle.propTypes = {
  border: PropTypes.bool,
  expand: PropTypes.bool,
}

export default CardTitle
