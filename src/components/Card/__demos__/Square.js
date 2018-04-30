import React from 'react'
import styled from 'styled-components'

import Button from '../../Button'
import Card from '..'

export const DemoCardTitle = styled(Card.Title)`
  color: #fff;
  height: 176px;
  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15%
    no-repeat #46b6ac;
`

export default () => (
  <Card elevation={2} height="20rem" width="20rem">
    <DemoCardTitle expand>
      <Card.TitleText>Update</Card.TitleText>
    </DemoCardTitle>
    <Card.SupportingText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
    </Card.SupportingText>
    <Card.Actions border>
      <Button colored>View Updates</Button>
    </Card.Actions>
  </Card>
)
