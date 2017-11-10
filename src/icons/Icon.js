import { compose, setDisplayName, setPropTypes, withProps } from 'recompose';
import { prop, always, cond } from 'lodash/fp';
import PropTypes from 'prop-types';
import React from 'react';

import { IconStyle } from './Icon.style';
import { proxyStyledStatics } from '../hocs';

const Icon = ({ name, __StyledComponent__: Styled, ...props }) => (
  <Styled {...props}>{name}</Styled>
);

const enhance = compose(
  proxyStyledStatics(IconStyle),
  setDisplayName('Icon'),
  setPropTypes({
    xs: PropTypes.bool,
    sm: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    __StyledComponent__: PropTypes.func.isRequired,
  }),
  withProps((p) => ({
    size: cond([
      [prop('size'), prop('size')],
      [prop('xs'), always('12')],
      [prop('sm'), always('16')],
      [prop('lg'), always('32')],
      [prop('xl'), always('64')],
    ])(p),
  })),
);

export default enhance(Icon);
