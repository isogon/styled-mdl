import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import { configurable, elevation } from '../../mixins'
import withPropArgs from '../../utils/withPropArgs'

const elevationFromProps = withPropArgs(elevation)
const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 400;
  ${configurable('height', 'auto')}
  ${configurable('width', '12.5rem')}
  max-width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;
  background: white;
  border-radius: 0.125rem;
  box-sizing: border-box;
  ${ifProp('expand', css`
    flex-grow: 1;
  `)}
  ${elevationFromProps(get('elevation'))}
`
Card.propTypes = {
  expand: PropTypes.bool,
  elevation: PropTypes.number,
}

Card.defaultProps = {
  elevation: 0,
  expand: false,
}

export default Card
