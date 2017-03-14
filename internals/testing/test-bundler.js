// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';
import 'jest-enzyme';

import React from 'react';
import { shallow, mount } from 'enzyme';

// requestAnimationFrame polyfill for jsDom
import './rAF';

global.shallowComponent = (component, defaultProps, children) => (props) =>
  shallow(React.createElement(component, { ...defaultProps, ...props }, children));
global.mountComponent = (component, defaultProps, children) => (props) =>
  mount(React.createElement(component, { ...defaultProps, ...props }, children));
