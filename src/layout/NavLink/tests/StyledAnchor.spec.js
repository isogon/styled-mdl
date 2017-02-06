import React from 'react';
import { shallow } from 'enzyme';

import StyledAnchor from '../StyledAnchor';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <StyledAnchor {...props}>
    {children}
  </StyledAnchor>
);

describe('<StyledAnchor />', () => {
  it('should render an <a>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('a').length).toEqual(1);
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
