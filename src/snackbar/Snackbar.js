import React, { PropTypes, Component } from 'react';
import Portal from 'react-portal';

import Toast from './Toast.style';
import Message from './Message.style';
import Action from './Action.style';

export default class Snackbar extends Component {
  static propTypes = {
    message: PropTypes.string,
    actionText: PropTypes.string,
    actionHandler: PropTypes.func,
    active: PropTypes.bool,
    position: PropTypes.string,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
  };

  static defaultProps = {
    position: 'left',
    offsetX: 20,
    offsetY: 20,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpened: props.active,
      active: props.active,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.active && nextProps.active && !this.isAnimating) {
      this.setState({ isOpened: true });
      this.animateIn = setTimeout(() => this.setState({ active: true }));
    }

    if (this.state.active && !nextProps.active) {
      this.setState({ active: false });
      this.isAnimating = true;

      this.animateOut = setTimeout(() => {
        this.isAnimating = false;
        if (this.props.active) {
          this.setState({ active: true });
        } else {
          this.setState({ isOpened: false });
        }
      }, 250);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.animateOut);
    clearTimeout(this.animateIn);
  }

  render() {
    return (
      <Portal isOpened={this.state.isOpened}>
        <Toast
          active={this.state.active}
          position={this.props.position}
          offsetX={this.props.offsetX}
          offsetY={this.props.offsetY}
        >
          {this.props.message && <Message>{this.props.message}</Message>}
          {this.props.actionText &&
            <Action onClick={this.props.actionHandler}>
              {this.props.actionText}
            </Action>}
        </Toast>
      </Portal>
    );
  }
}
