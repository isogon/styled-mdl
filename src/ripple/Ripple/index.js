import React from 'react';
import { autobind } from 'core-decorators';

import RippleEffect from './RippleEffect';
import RippleWrap from './RippleWrap';

export default class Ripple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnimating: false,
    };
  }

  @autobind
  onMouseDown() {
    this.setState({ isAnimating: true });
  }

  @autobind
  onMouseUp() {
    setTimeout(() => {
      this.setState({ isAnimating: false });
    }, 50);
  }

  render() {
    return (
      <RippleWrap
        {...this.props}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        <RippleEffect {...this.state} />
      </RippleWrap>
    );
  }
}
