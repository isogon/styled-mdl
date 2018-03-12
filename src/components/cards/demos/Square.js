import React from 'react';

import {
  Button,
  Card,
  CardActions,
  CardSupportingText,
  CardTitle,
  CardTitleText,
  shadow2dp,
} from '../../../';

export const DemoCardSquare = Card.extend`
  ${shadow2dp()} width: 320px;
  height: 320px;
`;

export const DemoCardTitle = CardTitle.extend`
  color: #fff;
  height: 176px;
  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15%
    no-repeat #46b6ac;
`;

export default () => (
  <DemoCardSquare>
    <DemoCardTitle expand>
      <CardTitleText>Update</CardTitleText>
    </DemoCardTitle>
    <CardSupportingText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
    </CardSupportingText>
    <CardActions border>
      <Button colored>View Updates</Button>
    </CardActions>
  </DemoCardSquare>
);
