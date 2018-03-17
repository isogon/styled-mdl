import React from 'react'
import ReactModal from 'react-modal'

import { DialogStyle, fadeIn } from './Dialog.style'

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(100, 100, 100, 0.3)',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: `${fadeIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  },
  content: {
    position: 'reltive',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 'auto',
    width: 'auto',
    background: 'transparent',
    zIndex: 1000,
    padding: 0,
    margin: 0,
    border: 0,
    overflow: 'visible',
  },
}

const DialogWrap = ({ className, children, ...props }) => (
  <ReactModal style={style} {...props}>
    <div className={className}>{children}</div>
  </ReactModal>
)

const Dialog = DialogStyle.withComponent(DialogWrap)

Dialog.displayName = 'Dialog'

export default Dialog
