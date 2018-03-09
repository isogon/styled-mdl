import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from 'material-components';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
  }

  show = () => {
    this.setState({
      showDialog: true,
    });
  };

  hide = () => {
    this.setState({
      showDialog: false,
    });
  };

  render() {
    return (
      <div>
        <Button raised onClick={this.show} text="Show" />
        <Dialog
          isOpen={this.state.showDialog}
          onRequestClose={this.hide}
          contentLabel="My Dialog"
          size="8"
        >
          <DialogTitle>MDL Dialog</DialogTitle>
          <DialogContent>
            This is an example of the Material Design Lite dialog component.
            Please use responsibly.
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hide}>Close</Button>
            <Button disabled>Disabled Action</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const caption = 'Basic Dialog';
const code = `class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
  }

  @autobind show() {
    this.setState({
      showDialog: true,
    });
  }

  @autobind hide() {
    this.setState({
      showDialog: false,
    });
  }

  render() {
    return (
      <div>
        <Button raised onClick={this.show} text="Show" />
        <Dialog
          isOpen={this.state.showDialog}
          onRequestClose={this.hide}
          contentLabel="My Dialog"
          size="8"
        >
          <DialogTitle>MDL Dialog</DialogTitle>
          <DialogContent>
            This is an example of the Material Design Lite dialog component. Please use responsibly.
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hide}>Close</Button>
            <Button disabled>Disabled Action</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}`;

export default { demo: Demo, caption, code };
