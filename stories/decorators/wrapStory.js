import { ifProp } from 'styled-tools'
import React from 'react'
import styled, { css, injectGlobal } from 'styled-components'

import { Theme, initGlobals, createTheme, colors } from '../../src'

initGlobals('Roboto')

const smdlTheme = createTheme({
  primary: colors.indigo[500],
  secondary: colors.pink[500],
})

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    height: 100%;
  }
  body {
    height: calc(100% - 16px);
  }
  #root {
    height: 100%;
  }
`

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${ifProp(
    'inverse',
    css`
      background: #333;
    `,
  )};
`

const StoryWrap = (props) => (
  <Theme theme={smdlTheme}>
    <Wrap {...props}>{props.children}</Wrap>
  </Theme>
)

export default (props = {}) => (fn) => <StoryWrap {...props}>{fn()}</StoryWrap>
