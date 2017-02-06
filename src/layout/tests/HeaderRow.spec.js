import React from 'react';
import { shallow } from 'enzyme';

import HeaderRow from '../HeaderRow';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <HeaderRow {...props}>
    {children}
  </HeaderRow>
);

describe('<HeaderRow />', () => {
  it('should render an <div> tag', () => {
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
