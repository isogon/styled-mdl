import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../TextInput';

const renderComponent = (props = {}) => shallow(
  <TextInput {...props} />
);

describe('<TextInput />', () => {
  it('should render an <input> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('input').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
