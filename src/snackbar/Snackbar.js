import { setPropTypes, setDisplayName, compose } from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';

import { SnackbarAction } from './Action.style';
import { SnackbarMessage } from './Message.style';
import { proxyStyledStatics } from '../hocs';
import { SnackbarStyle } from './Snackbar.style';

export const SnackbarBase = ({
  message,
  actionText,
  actionHandler,
  __StyledComponent__: Styled,
  ...props
}) => (
  <Styled {...props}>
    {message && <SnackbarMessage>{message}</SnackbarMessage>}
    {actionText && (
      <SnackbarAction onClick={actionHandler}>{actionText}</SnackbarAction>
    )}
  </Styled>
);

const enhance = compose(
  proxyStyledStatics(SnackbarStyle),
  setDisplayName('Snackbar'),
  setPropTypes({
    message: PropTypes.node,
    actionText: PropTypes.string,
    actionHandler: PropTypes.func,
  }),
);

export default enhance(SnackbarBase);
