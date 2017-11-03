import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import { autobind } from 'core-decorators';
import { compose, setDisplayName, setPropTypes, defaultProps } from 'recompose';

import { withStyle } from '../util';
import {
  tooltipWrapperStyle,
  TooltipBase,
  TooltipPosition,
} from './Tooltip.style';
import getRelativePosition from '../menu/getRelativePosition';

export class Tooltip extends Component {
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
  setControl(ctrl) {
    this.control = ctrl;
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
    const { children, className, ...props } = this.props;

    return (
      <div
        className={className}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        ref={this.setControl}
      >
        {children}
        <Portal isOpened={this.state.isOpened}>
          <TooltipPosition {...this.state} {...this.props}>
            <TooltipBase large={props.large} position={props.position}>{this.props.message}</TooltipBase>
          </TooltipPosition>
        </Portal>
      </div>
    );
  }
}

const enhance = compose(
  setPropTypes({
    message: PropTypes.node,
    children: PropTypes.node,
    position: PropTypes.string,
  }),
  defaultProps({
    position: 'above',
  }),
  withStyle(tooltipWrapperStyle),
  setDisplayName('Tooltip')
);

export default enhance(Tooltip);
