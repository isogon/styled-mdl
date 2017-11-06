import React from 'react';
import styled from 'styled-components';
import { MdEvent } from 'react-icons/lib/md';

import {
  Card,
  CardActions,
  CardTitle,
  CardTitleText,
  shadow2dp,
  Button,
  Spacer,
} from 'material-components';

const EventCard = Card.extend`
  ${shadow2dp()} width: 256px;
  height: 256px;
  background: #3e4eb8;
  align-self: flex-start;
`;

const EventInfo = styled(CardTitleText)`
  margin-top: 0;
  align-self: flex-start;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`;

const EventActions = styled(CardActions)`
  border-color: rgba(255, 255, 255, 0.2);
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;

const EventIcon = styled(MdEvent)`
  padding-right: 10px;
  font-size: 1.5em;
  color: #fff;
`;

const WhiteButton = Button.extend`
  color: #fff;
`;

const caption = 'Event Card';

const demo = () => (
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
      <EventIcon />
    </EventActions>
  </EventCard>
);

const code = `/*----- Event Card -----*/

const EventCard = styled(Card)\`
  \${shadow2dp()}
  width: 256px;
  height: 256px;
  background: #3E4EB8;
  align-self: flex-start;
\`;

const EventInfo = styled(CardTitleText)\`
  margin-top: 0;
  align-self: flex-start;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
\`;

const EventActions = styled(CardActions)\`
  border-color: rgba(255, 255, 255, 0.2);
  display: flex;
  box-sizing:border-box;
  align-items: center;
\`;

const EventIcon = styled(MdEvent)\`
  padding-right: 10px;
  font-size: 1.5em;
  color: #fff;
\`;

const WhiteButton = styled(Button)\`
  color: #fff;
\`;

// Somewhere in a render
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
    <EventIcon />
  </EventActions>
</EventCard>`;

export default { caption, demo, code };
