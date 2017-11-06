/* eslint-disable no-param-reassign, no-underscore-dangle */
import { assignIn } from 'lodash';
import { compose } from 'recompose';

const cloneComponent = (component) => {
  const cloned = component.__clonedFrom || component;

  function temp(...args) {
    return cloned.apply(this, args);
  }

  assignIn(temp, component);

  temp.__clonedFrom = cloned;

  return temp;
};

const proxyPropStatic = (propName, fnKey) => (Component) => {
  Component[fnKey] = function staticFn(...args) {
    const Cloned = cloneComponent(this);
    const NextStyledComponent = this.defaultProps[propName][fnKey](...args);
    Cloned.defaultProps = {
      ...this.defaultProps,
      [propName]: NextStyledComponent,
    };

    return Cloned;
  };

  return Component;
};

const passComponentAsProp = (propName, childComponent) => (Component) => {
  Component.defaultProps = {
    ...Component.defaultProps,
    [propName]: childComponent,
  };

  return Component;
};

const proxyStyledStatics = (
  StyledComponent,
  propName = '__StyledComponent__',
) =>
  compose(
    proxyPropStatic(propName, 'withComponent'),
    proxyPropStatic(propName, 'extend'),
    passComponentAsProp(propName, StyledComponent),
  );

export default proxyStyledStatics;
