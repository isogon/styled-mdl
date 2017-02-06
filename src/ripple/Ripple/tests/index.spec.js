import React from 'react';
import { mount } from 'enzyme';

import Ripple from '../';

describe('<Ripple />', () => {
  const test = {};

  beforeEach(() => {
    test.wrapper = mount(<Ripple />);
    jest.useFakeTimers();
  });

  it('should start animating on mouseDown', () => {
    test.wrapper.simulate('mouseDown');
    expect(test.wrapper.state('isAnimating')).toEqual(true);
  });

  it('should stop animating after 50ms on mouseUp', () => {
    test.wrapper.setState({ isAnimating: true });
    test.wrapper.simulate('mouseUp');

    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(50);

    jest.runAllTimers();
    expect(test.wrapper.state('isAnimating')).toEqual(false);
  });
});
