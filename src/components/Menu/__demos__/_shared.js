import React from 'react'
import styled from 'styled-components'

import { shadow2dp } from '../../../mixins'

const Bar = styled.div`
  box-sizing: border-box;
  background: #3f51b5;
  color: white;
  width: 100%;
  padding: 16px;
`

const Bg = styled.div`
  background: white;
  height: 148px;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  width: 200px;
  text-align: ${({ align }) => align};
  ${shadow2dp()};
`

export const MenuDemoWrapper = ({ align, children }) => (
  <Container align={align}>
    <Bar>{children}</Bar>
    <Bg />
  </Container>
)
