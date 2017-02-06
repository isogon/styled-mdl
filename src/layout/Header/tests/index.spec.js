import React from 'react';
import { shallow } from 'enzyme';

import Header from '../';
import headerTheme from '../headerTheme';
import StyledHeader from '../StyledHeader';
import { Theme } from '../../../theme';

const children = (<p>Test</p>);
const renderComponent = (props = {}) => shallow(
  <Header {...props}>
    {children}
  </Header>
);

describe('<Header />', () => {
  it('should render an <StyledHeader>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(StyledHeader).length).toEqual(1);
  });

  it('should render a <Theme>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Theme).length).toEqual(1);
  });

  it('should set [prop] `theme` on <Theme> correctly', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Theme).props().theme).toEqual(headerTheme);
  });

  // Invariant Styled Component Tests
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
