import React, { PropTypes, Component } from 'react';

import { MenuItem as MenuItemBase } from './Menu.style';
import { Ripple } from '../ripple';

export default class MenuItem extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    fadeDown: PropTypes.bool,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      getTransitionDelay: () => 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      const {
        height,
      } = this.menuItem.parentNode.parentNode.getBoundingClientRect();
      const offsetTop = this.menuItem.offsetTop;
      const { height: itemHeight } = this.menuItem.getBoundingClientRect();
      const getTransitionDelay = this.props.fadeDown
        ? (duration) => offsetTop / height * duration
        : (duration) => -(offsetTop + itemHeight - height) / height * duration;

      this.setState({ getTransitionDelay });
    }
  }

  render() {
    return (
      <MenuItemBase
        {...this.props}
        {...this.state}
        innerRef={(menuItem) => {
          this.menuItem = menuItem;
        }}
      >
        {this.props.children}
        <Ripple dark />
      </MenuItemBase>
    );
  }
}
