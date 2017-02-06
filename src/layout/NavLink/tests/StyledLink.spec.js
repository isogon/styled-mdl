import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import StyledLink from '../StyledLink';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <StyledLink {...props}>
    {children}
  </StyledLink>
);

describe('<StyledLink />', () => {
  it('should render a <Link>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Link).length).toEqual(1);
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
