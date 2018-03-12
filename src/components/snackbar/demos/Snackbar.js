import React, { Component } from 'react';
import { Toast, Snackbar, Button } from '../../../';

export default class Demo extends Component {
  state = {
    messages: [],
    showMessage: false,
  };

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.messages[0] &&
      nextState.messages[0] !== this.state.messages[0]
    ) {
      requestAnimationFrame(() => this.setState({ showMessage: true }));
      this.timeout = setTimeout(() => {
        this.setState({ showMessage: false });
        this.timeout = setTimeout(() => {
          this.setState({ messages: this.state.messages.slice(1) });
        }, 300);
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  counter = 0;

  increment = () => {
    this.counter += 1;
    this.setState({
      messages: [
        ...this.state.messages,
        { message: `Example message ${this.counter}` },
      ],
    });
  };

  render() {
    return (
      <div>
        <Button raised onClick={this.increment} text="Show" />
        <Toast isActive={this.state.showMessage}>
          <Snackbar {...this.state.messages[0]} />
        </Toast>
      </div>
    );
  }
}
