import React from 'react';
import { shallow } from 'enzyme';

import Navigation, { alignment } from '../Navigation';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <Navigation {...props}>
    {children}
  </Navigation>
);

describe('<Navigation />', () => {
  it('should render a <nav> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('nav').length).toEqual(1);
  });

  // Invariant Styled Component Tests
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});

describe('alignment', () => {
  it('should return `flex-end` when [prop] `alignRight` is true', () => {
    expect(alignment({ alignRight: true })).toEqual('flex-end');
  });
  it('should return `flex-start` when [prop] `alignRight` is falsey', () => {
    expect(alignment({ alignRight: false })).toEqual('flex-start');
  });
});
