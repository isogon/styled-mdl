import React from 'react'
import { MdShare } from 'react-icons/lib/md'

import {
  Button,
  Card,
  CardActions,
  CardMenu,
  CardSupportingText,
  CardTitle,
  CardTitleText,
  shadow2dp,
} from '../../../'

export const DemoCardWide = Card.extend`
  ${shadow2dp()} width: 512px;
`

export const DemoCardTitle = CardTitle.extend`
  color: #fff;
  height: 176px;
  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center /
    cover;
`

export const DemoCardMenu = CardMenu.extend`
  color: #fff;
`

export default () => (
  <DemoCardWide>
    <DemoCardTitle>
      <CardTitleText>Welcome</CardTitleText>
    </DemoCardTitle>
    <CardSupportingText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis
      pellentesque lacus eleifend lacinia...
    </CardSupportingText>
    <CardActions border>
      <Button colored>Get Started</Button>
    </CardActions>
    <DemoCardMenu>
      <Button icon>
        <MdShare />
      </Button>
    </DemoCardMenu>
  </DemoCardWide>
)
