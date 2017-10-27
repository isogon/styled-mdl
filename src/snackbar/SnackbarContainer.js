import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual, noop } from 'lodash';
import { uniqueArrayOf } from 'airbnb-prop-types';

import Snackbar from './Snackbar';
import Toast from './Toast';

export default class SnackbarContainer extends Component {
  static defaultProps = {
    onEnter: noop,
    onRequestLeave: noop,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      isAnimatingOut: false,
    };
  }

  componentWillReceiveProps({ messages }) {
    const messageToShow = messages[0] || null;
    if (!isEqual(messageToShow, this.state.active)) {
      this.applyNext(messageToShow);
    }
  }

  showMessage(message) {
    this.props.onEnter(message);

    this.setState({
      isActive: !!message,
      active: message,
    });

    if (message && message.timeout) {
      setTimeout(() => this.props.onRequestLeave(message), message.timeout);
    }
  }

  applyNext(message) {
    const showNext = () => this.showMessage(message);
    if (this.state.active) {
      this.setState(
        {
          isActive: false,
        },
        () => setTimeout(showNext, 350)
      );
    } else {
      showNext();
    }
  }

  render() {
    return (
      <Toast isActive={this.state.isActive} position={this.props.position}>
        <Snackbar {...this.state.active} />
      </Toast>
    );
  }
}

SnackbarContainer.propTypes = {
  messages: uniqueArrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      timeout: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEnter: PropTypes.func,
  onRequestLeave: PropTypes.func,
  position: PropTypes.string,
};
