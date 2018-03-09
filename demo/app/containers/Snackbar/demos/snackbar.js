import React, { Component } from 'react';
import { tail, concat } from 'lodash';
import { Toast, Snackbar, Button } from 'material-components';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: null,
      messages: [],
      showMessage: false,
      activeMessage: null,
    };
  }

  componentDidUpdate() {
    if (this.state.messages[0] && !this.state.activeMessage) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        activeMessage: this.state.messages[0],
        showMessage: true,
      });

      this.timeout = setTimeout(() => {
        this.setState({ showMessage: false });
        this.timeout = setTimeout(() => {
          this.setState({
            activeMessage: null,
            messages: tail(this.state.messages),
          });
          this.timeout = null;
        }, 300);
      }, 2000);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  changeButtonColor = () => {
    this.setState({
      buttonColor: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
      messages: concat(this.state.messages, {
        message: 'Button color changed',
        actionText: 'Undo',
        actionHandler: () => this.setState({ buttonColor: null }),
      }),
    });
  };

  render() {
    return (
      <div>
        <Button
          raised
          style={{ background: this.state.buttonColor }}
          onClick={this.changeButtonColor}
          text="Show"
        />
        <Toast isActive={this.state.showMessage}>
          <Snackbar {...this.state.activeMessage} />
        </Toast>
      </div>
    );
  }
}

const caption = 'Snacbkar';
const code = `class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: null,
      messages: [],
    };
  }

  changeButtonColor = () => {
    const buttonColor = \`#\${Math.floor(Math.random() * 0xFFFFFF).toString(16)}\`;
    this.setState({ buttonColor });
    this.addMessage({
      message: 'Button color changed',
      actionText: 'Undo',
      actionHandler: () => this.setState({ buttonColor: null }),
      timeout: 2000,
    });
  }

  addMessage = (message) => {
    this.setState({
      messages: concat(this.state.messages, message),
    });
  }

  @autobind
  clearMessage(message) {
    this.setState({
      messages: without(this.state.messages, message),
    });
  }

  render() {
    return (
      <div>
        <Button
          raised
          style={{ background: this.state.buttonColor }}
          onClick={this.changeButtonColor}
          text="Show"
        />
        <SnackbarContainer
          messages={this.state.messages}
          onRequestLeave={this.clearMessage}
        />
      </div>
    );
  }
}`;

export default { demo: Demo, caption, code };
