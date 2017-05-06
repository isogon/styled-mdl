import React, { Component, PropTypes } from 'react';
import Portal from 'react-portal';
import { autobind } from 'core-decorators';
import {
  TooltipWrapper,
  TooltipBase,
  TooltipPosition,
  TooltipContent,
} from './Tooltip.style';
import getRelativePosition from '../menu/getRelativePosition';

export default class Tooltip extends Component {
  static propTypes = {
    message: PropTypes.node,
    children: PropTypes.node,
    below: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition, true);
    cancelAnimationFrame(this.hide);
    cancelAnimationFrame(this.show);
  }

  @autobind setPosition() {
    const control = getRelativePosition(this.control);
    const horizontalCenter = control.left + control.width / 2;
    const verticalCenter = control.top + control.height / 2;
    const position = {};

    if (this.props.below) {
      position.x = horizontalCenter;
      position.y = control.bottom;
    } else if (this.props.left) {
      position.x = control.left;
      position.y = verticalCenter;
    } else if (this.props.right) {
      position.x = control.right;
      position.y = verticalCenter;
    } else {
      position.x = horizontalCenter;
      position.y = control.top;
    }
    this.setState({ ...position });
  }

  @autobind handleOpen() {
    this.setState({ isOpened: true });
    this.setPosition();
    this.open = requestAnimationFrame(() => {
      window.addEventListener('scroll', this.setPosition, true);
      this.setState({ isVisible: true });
    });
  }

  @autobind handleClose() {
    window.removeEventListener('scroll', this.setPosition, true);
    this.setState({
      isOpened: false,
      isVisible: false,
    });
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <TooltipWrapper>
        <TooltipContent
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          innerRef={(ctrl) => {
            this.control = ctrl;
          }}
        >
          {children}
        </TooltipContent>
        <Portal isOpened={this.state.isOpened}>
          <TooltipPosition {...this.state} {...this.props}>
            <TooltipBase {...props}>
              {this.props.message}
            </TooltipBase>
          </TooltipPosition>
        </Portal>
      </TooltipWrapper>
    );
  }
}
