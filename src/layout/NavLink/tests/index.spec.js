import React from 'react';
import { mount } from 'enzyme';

import NavLink from '../';

const children = (<p>Test</p>);
const to = '/to';
const href = '/href';

const renderComponent = (props = {}) => mount(
  <NavLink {...props}>
    {children}
  </NavLink>
);

describe('<NavLink />', () => {
  describe('when [prop] `to` is defined', () => {
    it('should render a <Link>', () => {
      const renderedComponent = renderComponent({ to });
      expect(renderedComponent.find('a').length).toEqual(1);
    });
  });

  describe('when [prop] `href` is defined', () => {
    it('should render an <a>', () => {
      const renderedComponent = renderComponent({ href });
      expect(renderedComponent.find('a').length).toEqual(1);
    });
  });

  describe('when niether [prop] `href` nor [prop] `to` is defined', () => {
    it('should render a <button>', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find('button').length).toEqual(1);
    });
  });

  describe('when both [prop] `href` and [prop] `to` is defined', () => {
    it('should render a <Link>', () => {
      const renderedComponent = renderComponent({ to, href });
      expect(renderedComponent.find('a').length).toEqual(1);
    });
  });
});
