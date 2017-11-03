import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { compose, setDisplayName } from 'recompose';

import { withStyle } from '../util';
import { getRippleSize, getRippleCoords } from './helpers';
import { Effect, WrapStyle } from './Ripple.style';

export class RippleBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
    };
  }

  componentDidMount() {
    this.size = getRippleSize(this.wrapper);
  }

  @autobind
  handleMouseDown(e) {
    const coords = getRippleCoords(e);
    const translate = `translate(-50%, -50%) translate(${coords})`;
    const initalScale = ' scale3d(0.0001, 0.0001, 1)';
    const finalScale = ' scale3d(1, 1, 1)';
    this.setState({
      size: this.size,
      shouldAnimate: false,
      transform: translate + initalScale,
      opacity: 0.3,
    });
    requestAnimationFrame(() => {
      this.setState({
        shouldAnimate: true,
        transform: translate + finalScale,
      });
    });
  }

  @autobind
  handleMouseUp() {
    this.setState({ opacity: 0 });
  }

  render() {
    return (
      <div
        ref={(wrapper) => {
          this.wrapper = wrapper;
        }}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseOut={this.handleMouseUp}
        onFocus={this.handleMouseDown}
        onBlur={this.handleMouseUp}
        className={this.props.className}
      >
        <Effect
          {...this.props}
          style={{
            height: this.state.size,
            width: this.state.size,
            transform: this.state.transform,
            opacity: this.state.opacity,
            transitionProperty: this.state.shouldAnimate
              ? 'transform, width, height, opacity'
              : 'none',
          }}
        />
      </div>
    );
  }
}

const enhance = compose(withStyle(WrapStyle), setDisplayName('Ripple'));

export default enhance(RippleBase);
