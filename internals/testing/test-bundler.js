// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';
import 'jest-enzyme';
import chalk from 'chalk';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ShallowWrapper from 'enzyme/ShallowWrapper';
import { trim, every, fromPairs, reduce, has } from 'lodash';
import until from './until';

// requestAnimationFrame polyfill for jsDom
import './rAF';

ShallowWrapper.prototype.until = until;
global.shallowComponent = (component, defaultProps = {}, children) => (
  props = {},
) =>
  shallow(
    React.createElement(component, { ...defaultProps, ...props }, children),
  );
global.mountComponent = (component, defaultProps = {}, children) => (
  props = {},
) =>
  mount(React.createElement(component, { ...defaultProps, ...props }, children));

const log = (pass) => (strings, thing, expected, actual) => {
  const [wanted, toBe, received] = strings.map(trim);
  return `${wanted} ${thing.type().displayName}${pass
    ? ' not'
    : ''} ${toBe}:\n${chalk.green(expected)}\n\n${received}:\n${chalk.red(
    actual,
  )}`;
};

const matchers = {
  toHaveInnerText() {
    return {
      compare(actual, expected) {
        const actualText = actual.children().text();
        const pass = actualText === expected;
        const message = log(
          pass,
        )`Expected ${actual} to have text ${expected} but it was ${actualText}`;
        return { pass, message };
      },
    };
  },
  toHaveCss() {
    return {
      compare(actual, expected) {
        const styles = fromPairs(
          actual
            .type()
            .rules[0].split('\n')
            .slice(1)
            .slice(0, -1)
            .map((rule) => {
              const [k, v] = rule.split(':').map(trim);
              return [k, trim(v, ';')];
            })
            .filter(([k]) => has(expected, k)),
        );
        const pass = every(expected, (v, k) => styles[k] === v);
        const toString = (s) =>
          reduce(s, (aggr, v, k) => `${aggr}${k}: ${v}\n`, '');
        const message = log(pass)`Expected ${actual} to have styles ${toString(
          expected,
        )} but it had ${toString(styles)}`;
        return { pass, message };
      },
    };
  },
};

beforeEach(() => {
  jest.addMatchers({ ...matchers });
});
