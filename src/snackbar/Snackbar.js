import React from 'react';
import PropTypes from 'prop-types';
import { setPropTypes, setDisplayName, compose } from 'recompose';

import { withStyle } from '../util';
import snackbarStyle from './Snackbar.style';
import Message from './Message.style';
import Action from './Action.style';

export const SnackbarBase = ({
  message,
  actionText,
  actionHandler,
  className,
}) => (
  <div className={className}>
    {message && <Message>{message}</Message>}
    {actionText && <Action onClick={actionHandler}>{actionText}</Action>}
  </div>
);

const enhance = compose(
  withStyle(snackbarStyle),
  setPropTypes({
    message: PropTypes.node,
    actionText: PropTypes.string,
    actionHandler: PropTypes.func,
  }),
  setDisplayName('Snackbar')
);

export default enhance(SnackbarBase);
