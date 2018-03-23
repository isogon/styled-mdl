import React from 'react'
import styled from 'styled-components'

import { shadow2dp } from '../../../mixins'
import Button from '../../Button'
import Card from '..'
import Icon from '../../Icon'

export const DemoCardWide = styled(Card)`
  ${shadow2dp()} width: 512px;
`

export const DemoCardTitle = styled(Card.Title)`
  color: #fff;
  height: 176px;
  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center /
    cover;
`

export const DemoCardMenu = styled(Card.Menu)`
  color: #fff;
`

export default () => (
  <DemoCardWide>
    <DemoCardTitle>
      <Card.TitleText>Welcome</Card.TitleText>
    </DemoCardTitle>
    <Card.SupportingText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis
      pellentesque lacus eleifend lacinia...
    </Card.SupportingText>
    <Card.Actions border>
      <Button colored>Get Started</Button>
    </Card.Actions>
    <DemoCardMenu>
      <Button icon>
        <Icon name="share" />
      </Button>
    </DemoCardMenu>
  </DemoCardWide>
)
