import React, { PropTypes } from 'react';

import Toast from './Toast.style';
import Message from './Message.style';
import Action from './Action.style';

export default function Snackbar({ message, action, onActionClick, active }) {
  return (
    <Toast active={active}>
      <Message>{message}</Message>
      <Action onClick={onActionClick}>{action}</Action>
    </Toast>
  );
}

Snackbar.propTypes = {
  message: PropTypes.string,
  action: PropTypes.string,
  onActionClick: PropTypes.func,
  active: PropTypes.bool,
};
