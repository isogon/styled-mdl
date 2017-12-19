import { compose, setDisplayName, setPropTypes, defaultProps } from 'recompose';
import Portal from 'react-portal';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { autobind } from 'core-decorators';

import { TooltipStyle, TooltipPosition, TooltipWrapper } from './Tooltip.style';
import { proxyStyledStatics } from '../hocs';
import getRelativePosition from '../menu/getRelativePosition';

export class TooltipBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition, true);
    clearTimeout(this.open);
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
    this.open = setTimeout(() => {
      this.setState({ isVisible: true });
    }, this.props.delay);
  }

  @autobind
  handleClose() {
    window.removeEventListener('scroll', this.setPosition, true);
    clearTimeout(this.open);
    this.setState({ isOpened: false, isVisible: false });
  }

  render() {
    const { children, __StyledComponent__: Styled, ...props } = this.props;

    return (
      <Styled
        {...props}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        innerRef={this.setControl}
      >
        {children}
        <Portal isOpened={this.state.isOpened}>
          <TooltipPosition {...this.state} {...this.props}>
            <TooltipStyle large={props.large} position={props.position}>
              {this.props.message}
            </TooltipStyle>
          </TooltipPosition>
        </Portal>
      </Styled>
    );
  }
}

const enhance = compose(
  proxyStyledStatics(TooltipWrapper),
  setDisplayName('Tooltip'),
  setPropTypes({
    message: PropTypes.node,
    children: PropTypes.node,
    position: PropTypes.string,
    delay: PropTypes.number,
  }),
  defaultProps({
    position: 'above',
    delay: 0,
  }),
);

export default enhance(TooltipBase);
