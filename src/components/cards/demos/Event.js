import React from 'react'

import {
  Card,
  CardActions,
  CardTitle,
  CardTitleText,
  shadow2dp,
  Button,
  Spacer,
  Icon,
} from '../../../'

const EventCard = Card.extend`
  ${shadow2dp()} width: 256px;
  height: 256px;
  background: #3e4eb8;
  align-self: flex-start;
`

const EventInfo = CardTitleText.extend`
  margin-top: 0;
  align-self: flex-start;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`

const EventActions = CardActions.extend`
  border-color: rgba(255, 255, 255, 0.2);
  display: flex;
  box-sizing: border-box;
  align-items: center;
`

const EventIcon = Icon.extend`
  padding-right: 10px;
  color: #fff;
`

const WhiteButton = Button.extend`
  color: #fff;
`

export default () => (
  <EventCard>
    <CardTitle expand>
      <EventInfo>
        Featured event:<br />
        May 24, 2016<br />
        7-11pm
      </EventInfo>
    </CardTitle>
    <EventActions border>
      <WhiteButton colored>Add to calenar</WhiteButton>
      <Spacer />
      <EventIcon name="event" size="24" />
    </EventActions>
  </EventCard>
)
