import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { without, concat } from 'lodash';
import { SnackbarContainer, Button } from 'material-components';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      messages: [],
    };
  }

  @autobind
  increment() {
    const counter = this.state.counter + 1;
    this.setState({ counter });
    this.addMessage({
      message: `Example message #${counter}`,
      timeout: 2000,
    });
  }

  @autobind
  addMessage(message) {
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
}

const caption = 'Toast';
const code =
`class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      messages: [],
    };
  }

  @autobind
  increment() {
    const counter = this.state.counter + 1;
    this.setState({ counter });
    this.addMessage({
      message: \`Example message #\${counter}\`,
      timeout: 2000,
    });
  }

  @autobind
  addMessage(message) {
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
