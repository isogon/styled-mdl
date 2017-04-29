import React, { Component } from 'react';
import { autobind } from 'core-decorators';
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
    const mdSpecLink =
      'https://www.google.com/design/spec/components/dialogs.html#dialogs-specs';
    return (
      <div>
        <Button raised onClick={this.show} text="Show" />
        <Dialog
          isOpen={this.state.showDialog}
          onRequestClose={this.hide}
          contentLabel="Allow data collection"
          size="5"
        >
          <DialogTitle>MDL Dialog</DialogTitle>
          <DialogContent>
            This is an example of the MDL Dialog being used as a modal. It is using the full width action design intended for use with buttons that do not fit within the specified
            {' '}
            <a href={mdSpecLink}>length metrics</a>
            .
          </DialogContent>
          <DialogActions fullWidth>
            <Button onClick={this.hide}>Agree</Button>
            <Button disabled>Inactive Action</Button>
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
    const mdSpecLink =
      'https://www.google.com/design/spec/components/dialogs.html#dialogs-specs';
    return (
      <div>
        <Button raised onClick={this.show} text="Show" />
        <Dialog
          isOpen={this.state.showDialog}
          onRequestClose={this.hide}
          contentLabel="Allow data collection"
          size="4"
        >
          <DialogTitle>MDL Dialog</DialogTitle>
          <DialogContent>
            This is an example of the MDL Dialog being used as a modal. It is using the full width action design intended for use with buttons that do not fit within the specified
            {' '}
            <a href={mdSpecLink}>length metrics</a>
            .
          </DialogContent>
          <DialogActions fullWidth>
            <Button onClick={this.hide}>Agree</Button>
            <Button disabled>Inactive Action</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}`;

export default { demo: Demo, caption, code };
