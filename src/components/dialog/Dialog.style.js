import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import {
  animationDefaultValue,
  animationLinearOutSlowInValue,
  elevation,
} from '../../mixins'
import themeProps from '../../theme/themeProps'

const flyIn = keyframes`
  from {
    transform: translate(0, 5vh);
  }
  to {
    transform: translate(0, 0);
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const DialogStyle = styled.div`
  background: white;
  width: ${({ size }) => `${parseInt(size, 10) * 3.5}rem`};
  max-width: calc(100vw - 144px);
  max-height: 80vh;
  margin-top: -15vh;
  border-radius: 0.1875rem;
  overflow: auto;
  animation:
    ${animationDefaultValue(fadeIn)} forwards,
    ${animationLinearOutSlowInValue(flyIn)} forwards;
  ${elevation(24)}
`

DialogStyle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

DialogStyle.defaultProps = {
  size: 5,
}


export const DialogTitle = styled.h1`
  padding: 1.5rem 1.5rem 0;
  margin: 0;
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 500;
`

export const DialogContent = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${themeProps.textPrimaryOnLight};
`

export const DialogActions = styled.div`
  position: relative;
  padding: 0.5rem 0 0.5rem 1.5rem;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  > button {
    margin-right: 1.5rem;
    height: 2.25rem;
  }
  ${ifProp('fullWidth', css`
    padding: 0 0 0.5rem 0;
    right: 0;
    > button {
      height: 3rem;
      flex: 0 0 auto;
      width: 100%;
      padding-right: 1rem;
      margin-right: 0;
      text-align: right;
      justify-content: flex-end;
      border-radius: 0;
    }
  `)}
`

DialogActions.propTypes = {
  fullWidth: PropTypes.bool,
}
