import React from 'react';
import PropTypes from 'prop-types';
import { setPropTypes, setDisplayName, defaultProps, compose } from 'recompose';

import { BadgeWrapStyle, BadgeText } from './Badge.style';
import { withStyle } from '../util/tools';

export const BadgeBase = ({ text, children, className, ...props }) => (
  <div className={className}>
    {children}
    <BadgeText {...props}>{text}</BadgeText>
  </div>
);

const enhance = compose(
  setPropTypes({
    text: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
  }),
  defaultProps({
    background: true,
  }),
  withStyle(BadgeWrapStyle),
  setDisplayName('Badge')
);

export default enhance(BadgeBase);
