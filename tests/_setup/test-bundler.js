import 'jest-enzyme';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './until';
import './textOnly';

Enzyme.configure({ adapter: new Adapter() });

global.shallowComponent = (component, defaultProps = {}, children) => (
  props = {},
) =>
  shallow(
    React.createElement(component, { ...defaultProps, ...props }, children),
  );

global.mountComponent = (component, defaultProps = {}, children) => (
  props = {},
) =>
  mount(
    React.createElement(component, { ...defaultProps, ...props }, children),
  );

const matchers = {
  toHaveInnerText() {
    return {
      compare(actual, expected) {
        const actualText = actual.textOnly();
        const pass = actualText === expected;
        const expectation = pass
          ? 'Expected not to have text'
          : 'Expected text';
        return {
          pass,
          message: () =>
            `${expectation} "${expected}", but got "${actualText}"`,
        };
      },
    };
  },
};

beforeEach(() => {
  jest.addMatchers({ ...matchers });
  jest
    .spyOn(window, 'requestAnimationFrame')
    .mockImplementation((cb) => setTimeout(cb));
  jest
    .spyOn(window, 'cancelAnimationFrame')
    .mockImplementation((timeout) => clearTimeout(timeout));
});

afterEach(() => {
  window.requestAnimationFrame.mockRestore();
  window.cancelAnimationFrame.mockRestore();
});
