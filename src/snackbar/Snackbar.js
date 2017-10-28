import React from 'react';
import PropTypes from 'prop-types';

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
  message: PropTypes.node,
  actionText: PropTypes.string,
  actionHandler: PropTypes.func,
};
