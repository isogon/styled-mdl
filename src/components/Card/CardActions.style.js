import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import themeProps from '../../theme/themeProps'

const CardActions = styled.div`
  font-size: 1rem;
  line-height: normal;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  ${ifProp('border', css`
    border-top: 1px solid ${themeProps.divider};
  `)}
`

CardActions.propTypes = {
  border: PropTypes.bool,
}

export default CardActions
