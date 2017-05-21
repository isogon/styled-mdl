import React, { PropTypes } from 'react';

import SnackbarBase from './Snackbar.style';
import Message from './Message.style';
import Action from './Action.style';

export default function Snackbar({ message, actionText, actionHandler }) {
  return (
    <SnackbarBase>
      {message && <Message>{message}</Message>}
      {actionText &&
        <Action onClick={actionHandler}>
          {actionText}
        </Action>}
    </SnackbarBase>
  );
}

Snackbar.propTypes = {
  message: PropTypes.string,
  actionText: PropTypes.string,
  actionHandler: PropTypes.func,
};
