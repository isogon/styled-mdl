import React, { Component } from 'react';
import { tail, concat } from 'lodash';
import { Toast, Snackbar, Button } from 'material-components';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      messages: [],
      showMessage: false,
      activeMessage: null,
    };
  }

  componentDidUpdate() {
    if (this.state.messages[0] && !this.state.activeMessage) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        showMessage: true,
        activeMessage: this.state.messages[0],
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

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
      messages: concat(this.state.messages, {
        message: `Example message #${this.state.counter + 1}`,
      }),
    });
  };

  render() {
    return (
      <div>
        <Button raised onClick={this.increment} text="Show" />
        <Toast isActive={this.state.showMessage}>
          <Snackbar {...this.state.activeMessage} />
        </Toast>
      </div>
    );
  }
}

const caption = 'Toast';
const code = `class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      messages: [],
    };
  }

  increment = () => {
    const counter = this.state.counter + 1;
    this.setState({ counter });
    this.addMessage({
      message: \`Example message #\${counter}\`,
      timeout: 2000,
    });
  }

  addMessage = (message) => {
    this.setState({
      messages: concat(this.state.messages, message),
    });
  }

  clearMessage = (message) => {
    this.setState({
      messages: without(this.state.messages, message),
    });
  }

  render() {
    return (
      <div>
        <Button
          raised
          onClick={this.increment}
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
