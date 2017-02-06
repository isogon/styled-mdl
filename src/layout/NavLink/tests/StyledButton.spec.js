import React from 'react';
import { shallow } from 'enzyme';

import StyledButton from '../StyledButton';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <StyledButton {...props}>
    {children}
  </StyledButton>
);

describe('<StyledButton />', () => {
  it('should render a <button>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
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
