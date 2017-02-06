import React from 'react';
import { shallow } from 'enzyme';

import StyledHeader from '../StyledHeader';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <StyledHeader {...props}>
    {children}
  </StyledHeader>
);

describe('<StyledHeader />', () => {
  it('should render a <header> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('header').length).toEqual(1);
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
