import React, { Component, PropTypes } from 'react';
import Portal from 'react-portal';
import { autobind } from 'core-decorators';
import { TooltipBase, TooltipPosition, TooltipWrapper } from './Tooltip.style';
import getRelativePosition from '../menu/getRelativePosition';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition, true);
    cancelAnimationFrame(this.open);
  }

  getPosition() {
    const control = getRelativePosition(this.control);
    const horizontalCenter = control.left + control.width / 2;
    const verticalCenter = control.top + control.height / 2;

    switch (this.props.position) {
      case 'below':
        return { x: horizontalCenter, y: control.bottom };
      case 'left':
        return { x: control.left, y: verticalCenter };
      case 'right':
        return { x: control.right, y: verticalCenter };
      default:
        return { x: horizontalCenter, y: control.top };
    }
  }

  @autobind
  setPosition() {
    this.setState({ ...this.getPosition() });
  }

  @autobind
  handleOpen() {
    this.setState({ isOpened: true });
    this.setPosition();
    window.addEventListener('scroll', this.setPosition, true);
    this.open = requestAnimationFrame(() => {
      this.setState({ isVisible: true });
    });
  }

  @autobind
  handleClose() {
    window.removeEventListener('scroll', this.setPosition, true);
    this.setState({ isOpened: false, isVisible: false });
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <TooltipWrapper
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        innerRef={(ctrl) => {
          this.control = ctrl;
        }}
      >
        {children}
        <Portal isOpened={this.state.isOpened}>
          <TooltipPosition {...this.state} {...this.props}>
            <TooltipBase {...props}>{this.props.message}</TooltipBase>
          </TooltipPosition>
        </Portal>
      </TooltipWrapper>
    );
  }
}

Tooltip.propTypes = {
  message: PropTypes.node,
  children: PropTypes.node,
  position: PropTypes.string,
};

Tooltip.defaultProps = {
  position: 'above',
};
