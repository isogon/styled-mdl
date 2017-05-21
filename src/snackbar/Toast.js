import React, { PropTypes, Component } from 'react';
import Portal from 'react-portal';

import ToastBase from './Toast.style';

export default class Toast extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    position: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    position: 'left',
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpened: props.isActive,
      isActive: props.isActive,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isActive && nextProps.isActive && !this.isAnimating) {
      this.setState({ isOpened: true });
      this.animateIn = setTimeout(() => this.setState({ isActive: true }));
    }

    if (this.state.isActive && !nextProps.isActive) {
      this.setState({ isActive: false });
      this.isAnimating = true;

      this.animateOut = setTimeout(() => {
        this.isAnimating = false;
        if (this.props.isActive) {
          this.setState({ isActive: true });
        } else {
          this.setState({ isOpened: false });
        }
      }, 300);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.animateOut);
    clearTimeout(this.animateIn);
  }

  render() {
    return (
      <Portal isOpened={this.state.isOpened}>
        <ToastBase
          isActive={this.state.isActive}
          position={this.props.position}
        >
          {this.props.children}
        </ToastBase>
      </Portal>
    );
  }
}
