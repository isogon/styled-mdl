import React from 'react'
import styled from 'styled-components'

import { shadow2dp } from '../../../mixins'
import Card from '..'

const ImageCard = styled(Card)`
  ${shadow2dp()} width: 256px;
  height: 256px;
  background: url('https://getmdl.io/assets/demos/image_card.jpg') center /
    cover;
`

const Footer = styled(Card.Actions)`
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
`

const Filename = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`

export default () => (
  <ImageCard>
    <Card.Title expand />
    <Footer>
      <Filename>Image.jpg</Filename>
    </Footer>
  </ImageCard>
)
