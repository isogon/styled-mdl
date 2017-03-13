import React from 'react';
import { autobind } from 'core-decorators';

import { getRippleSize, getRippleCoords } from './helpers';
import RippleEffect from './RippleEffect.style';
import RippleWrap from './RippleWrap.style';

export default class Ripple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      transform: 'translate(-50%, -50%)',
    };
  }

  componentDidMount() {
    this.size = getRippleSize(this.wrapper);
  }

  @autobind
  handleMouseDown(e) {
    const coords = getRippleCoords(e);
    const translate = `translate(-50%, -50%) translate(${coords})`;
    const initalScale = ' scale(0.0001, 0.0001)';
    this.setState({
      size: this.size,
      shouldAnimate: false,
      transform: translate + initalScale,
      opacity: 0.3,
    });
    requestAnimationFrame(() => this.setState({
      shouldAnimate: true,
      transform: translate,
    }));
  }

  @autobind
  handleMouseUp() {
    this.setState({ opacity: 0 });
  }

  render() {
    return (
      <RippleWrap
        {...this.props}
        innerRef={(wrapper) => (this.wrapper = wrapper)}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <RippleEffect {...this.state} />
      </RippleWrap>
    );
  }
}
