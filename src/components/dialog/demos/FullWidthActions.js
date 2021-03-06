import React from 'react'
import { withStateHandlers } from 'recompose'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from '../../../'

const mdSpecLink =
  'https://www.google.com/design/spec/components/dialogs.html#dialogs-specs'

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
      size="5"
    >
      <DialogTitle>MDL Dialog</DialogTitle>
      <DialogContent>
        This is an example of the MDL Dialog being used as a modal. It is using
        the full width action design intended for use with buttons that do not
        fit within the specified <a href={mdSpecLink}>length metrics</a>
        .
      </DialogContent>
      <DialogActions fullWidth>
        <Button onClick={hideDialog}>Agree</Button>
        <Button disabled>Inactive Action</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
))
