import { withStateHandlers } from 'recompose'
import React from 'react'

import Button from '../../Button'
import Dialog from '..'

export default withStateHandlers(
  { isShowingDialog: false },
  {
    showDialog: () => () => ({ isShowingDialog: true }),
    hideDialog: () => () => ({ isShowingDialog: false }),
  },
)(({ showDialog, hideDialog, isShowingDialog }) => (
  <React.Fragment>
    <Button raised onClick={showDialog} text="Show" />
    <Dialog
      isOpen={isShowingDialog}
      onRequestClose={hideDialog}
      contentLabel="My Dialog"
      appElement={document.getElementById('root')}
      size="8"
    >
      <Dialog.Title>MDL Dialog</Dialog.Title>
      <Dialog.Content>
        This is an example of the Material Design Lite dialog component. Please
        use responsibly.
      </Dialog.Content>
      <Dialog.Actions>
        <Button onClick={hideDialog}>Close</Button>
        <Button disabled>Disabled Action</Button>
      </Dialog.Actions>
    </Dialog>
  </React.Fragment>
))
