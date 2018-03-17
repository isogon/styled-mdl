import React from 'react'
import { withStateHandlers } from 'recompose'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from '../../../'

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
      <DialogTitle>MDL Dialog</DialogTitle>
      <DialogContent>
        This is an example of the Material Design Lite dialog component. Please
        use responsibly.
      </DialogContent>
      <DialogActions>
        <Button onClick={hideDialog}>Close</Button>
        <Button disabled>Disabled Action</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
))
