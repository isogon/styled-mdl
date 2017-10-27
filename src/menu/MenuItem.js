import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MenuItem as MenuItemBase } from './Menu.style';
import { Ripple } from '../ripple';

export default class MenuItem extends Component {
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
      const getTransitionDelay = nextProps.fadeDown
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

MenuItem.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node,
};
