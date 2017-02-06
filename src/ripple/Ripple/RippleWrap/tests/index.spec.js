import React from 'react';
import { shallow } from 'enzyme';

import RippleWrap from '../';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <RippleWrap {...props}>
    {children}
  </RippleWrap>
);

describe('<RippleWrap />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toEqual(1);
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
