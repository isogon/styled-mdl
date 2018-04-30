import React from 'react'
import styled from 'styled-components'

import Card from '..'

const ImageCard = styled(Card)`
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
  <ImageCard elevation={2} height="16rem" width="16rem">
    <Card.Title expand />
    <Footer>
      <Filename>Image.jpg</Filename>
    </Footer>
  </ImageCard>
)
