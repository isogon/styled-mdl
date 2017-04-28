import React from 'react';
import ReactModal from 'react-modal';

import { DialogBase } from './Dialog.style';

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(100, 100, 100, 0.3)',
    zIndex: 999,
  },
  content: {
    height: 0,
    width: 0,
    background: 'transparent',
    zIndex: 1000,
    padding: 0,
    margin: 0,
    border: 0,
  },
};

export default function Dialog(props) {
  return (
    <ReactModal style={modalStyle} {...props}>
      <DialogBase {...props} />
    </ReactModal>
  );
}

Dialog.defaultProps = {
  size: '5',
};
