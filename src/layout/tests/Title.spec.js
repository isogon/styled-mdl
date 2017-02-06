import React from 'react';
import { shallow } from 'enzyme';

import Title from '../Title';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <Title {...props}>
    {children}
  </Title>
);

describe('<Title />', () => {
  it('should render an <h1> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('h1').length).toEqual(1);
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
