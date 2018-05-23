import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import compose from 'lodash/fp/flowRight'
import cond from 'lodash/fp/cond'
import get from 'lodash/fp/get'
import identity from 'lodash/fp/identity'
import set from 'lodash/fp/set'
import throttle from 'lodash/fp/throttle'

import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from './Menu.constants'
import { MenuWrap } from './Menu.style'
import { focusNextIn, focusPreviousIn } from '../../utils/focusIn'
import AttachedSurface from '../AttachedSurface'
import mapProps from '../../utils/mapProps'
import withTimeouts from '../../higherOrderComponents/withTimeouts'

class MenuBase extends Component {
  componentDidMount() {
    /* eslint-disable-next-line react/no-find-dom-node */
    this.DOMNode = ReactDOM.findDOMNode(this)
    this.DOMNode.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    this.DOMNode.removeEventListener('keydown', this.handleKeydown)
  }

  throttledKeyDown = throttle(150, (e) => {
    if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
      focusNextIn(this.menu, e)
    }
    if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      focusPreviousIn(this.menu, e)
    }
  })

  handleKeydown = (e) => {
    if (e.key === 'Escape') {
      this.DOMNode.focus()
    } else {
      if (e.persist) {
        e.persist()
      }
      this.throttledKeyDown(e)
    }
  }

  render() {
    return (
      <AttachedSurface
        closeOnOutsideClick
        closeOnEsc
        position={this.props.position}
        elevation={this.props.elevation}
        defaultOpen={this.props.defaultOpen}
      >
        {({ openSurface, closeSurface, surface, isOpen }) =>
          this.props.children({
            openMenu: openSurface,
            closeMenu: closeSurface,
            isOpen,
            menu: (children) =>
              surface(
                <MenuWrap
                  className={this.props.className}
                  onClick={() => this.props.setTimeout(closeSurface, 100)}
                  innerRef={(menu) => {
                    this.menu = menu
                  }}
                  onKeyDown={this.handleKeydown}
                >
                  {children}
                </MenuWrap>,
              ),
          })
        }
      </AttachedSurface>
    )
  }
}

MenuBase.propTypes = {
  children: PropTypes.func.isRequired,
  elevation: PropTypes.number,
  defaultOpen: PropTypes.bool,
  position: PropTypes.oneOf([TOP_RIGHT, TOP_LEFT, BOTTOM_RIGHT, BOTTOM_LEFT]),
}

MenuBase.defaultProps = {
  elevation: 2,
  position: BOTTOM_LEFT,
}

// Todo Anchor/Origin
// <Menu anchor="top-left" />

const Menu = compose(
  withTimeouts,
  mapProps(
    cond([
      [get('position'), identity],
      [get('topRight'), set('position', TOP_RIGHT)],
      [get('topLeft'), set('position', TOP_LEFT)],
      [get('bottomRight'), set('position', BOTTOM_RIGHT)],
      [get('bottomLeft'), set('position', BOTTOM_LEFT)],
    ]),
  ),
)(MenuBase)

export default Menu
