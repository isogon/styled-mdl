import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import { setDisplayName, setPropTypes, defaultProps, compose } from 'recompose';
import { ToastAnimation } from './Toast.style';

export class ToastBase extends Component {
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
        <ToastAnimation
          isActive={this.state.isActive}
          position={this.props.position}
        >
          {this.props.children}
        </ToastAnimation>
      </Portal>
    );
  }
}

const enhance = compose(
  defaultProps({
    position: 'left',
  }),
  setPropTypes({
    isActive: PropTypes.bool,
    position: PropTypes.string,
    children: PropTypes.node,
  }),
  setDisplayName('Toast')
);

export default enhance(ToastBase);
