import React, { PropTypes, Component, Children, cloneElement } from 'react';
import { autobind } from 'core-decorators';
import Portal from 'react-portal';
import {
  MenuContainer,
  MenuControlWrap,
  MenuOutline,
  MenuBase,
} from './Menu.style';
import getRelativePosition from './getRelativePosition';

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
    control: PropTypes.node,
    bottomRight: PropTypes.bool,
    topLeft: PropTypes.bool,
    topRight: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };

    this.controlNode = cloneElement(props.control, {
      onClick: this.handleClick,
      innerRef: (ctrl) => {
        this.control = ctrl;
      },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMenuPosition, true);
    cancelAnimationFrame(this.closeMenu);
    cancelAnimationFrame(this.openMenu);
  }

  @autobind setMenuPosition() {
    const control = getRelativePosition(this.control);
    const position = {};
    if (this.props.bottomRight) {
      position.left = control.left + control.width - this.state.width;
      position.top = control.top + control.height;
    } else if (this.props.topLeft) {
      position.left = control.left;
      position.top = control.top - this.state.height;
    } else if (this.props.topRight) {
      position.left = control.left + control.width - this.state.width;
      position.top = control.top - this.state.height;
    } else {
      position.left = control.left;
      position.top = control.top + control.height;
    }

    this.setState({ ...position });
  }

  @autobind handleOpen() {
    this.openMenu = requestAnimationFrame(() => {
      if (this.preventOpen) {
        return;
      }

      const menu = this.menu.getBoundingClientRect();
      this.setState({
        height: menu.height,
        width: menu.width,
      });

      window.addEventListener('scroll', this.setMenuPosition, true);
      this.setState({ isVisible: true });
      this.setMenuPosition();
    });
  }

  @autobind handleClose() {
    window.removeEventListener('scroll', this.setMenuPosition, true);

    this.closeMenu = requestAnimationFrame(() => {
      this.setState({
        isVisible: false,
      });
    });
  }

  render() {
    const childrenWithProps = Children.map(this.props.children, (child) =>
      cloneElement(child, {
        isVisible: this.state.isVisible,
        growUp: !this.props.topRight && !this.props.topLeft,
      }),
    );

    const control = cloneElement(this.props.control, {
      onClick: () => {
        this.preventOpen = this.state.isVisible;
      },
      innerRef: (ctrl) => {
        this.control = ctrl;
      },
    });

    return (
      <MenuControlWrap>
        <Portal
          openByClickOn={<span>{control}</span>}
          closeOnOutsideClick
          onOpen={this.handleOpen}
          onClose={this.handleClose}
        >
          <MenuContainer
            {...this.state}
            {...this.props}
            onClick={() => setTimeout(() => this.handleClose(), 100)}
          >
            <MenuOutline {...this.state} {...this.props} />
            <MenuBase
              {...this.state}
              {...this.props}
              innerRef={(menu) => {
                this.menu = menu;
              }}
            >
              {childrenWithProps}
            </MenuBase>
          </MenuContainer>
        </Portal>
      </MenuControlWrap>
    );
  }
}
