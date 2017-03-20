import React, { PropTypes } from 'react';

import Toast from './Toast.style';
import Message from './Message.style';
import Action from './Action.style';

export default function Snackbar({ message, actionText, actionHandler, active }) {
  return (
    <Toast active={active}>
      <Message>{message}</Message>
      <Action onClick={actionHandler}>{actionText}</Action>
    </Toast>
  );
}

Snackbar.propTypes = {
  message: PropTypes.string,
  actionText: PropTypes.string,
  actionHandler: PropTypes.func,
  active: PropTypes.bool,
};
