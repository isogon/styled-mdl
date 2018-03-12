import { setPropTypes, setDisplayName, defaultProps, compose } from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';

import { BadgeWrap, BadgeText } from './Badge.style';
import { proxyStyledStatics } from '../../hocs';

export const BadgeBase = ({
  text,
  children,
  __StyledComponent__: Styled,
  ...props
}) => (
  <Styled {...props}>
    {children}
    <BadgeText {...props}>{text}</BadgeText>
  </Styled>
);

const enhance = compose(
  proxyStyledStatics(BadgeWrap),
  setDisplayName('Badge'),
  setPropTypes({
    text: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
  }),
  defaultProps({
    background: true,
  }),
);

export default enhance(BadgeBase);
