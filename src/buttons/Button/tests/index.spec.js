import React from 'react';
import { mount } from 'enzyme';

import Button from '../';

describe('<Button />', () => {
  let test;

  beforeEach(() => {
    test = {};
  });

  it('should render a <button> tag', () => {
    test.wrapper = mount(<Button />);
    expect(test.wrapper.find('button').length).toEqual(1);
  });

  describe('inner <button>', () => {
    beforeEach(() => {
      test.wrapper = mount(<Button />);
      test.button = test.wrapper.find('button');
    });

    it('should have a className attribute', () => {
      expect(test.button.prop('className')).toBeDefined();
    });
  });
});
