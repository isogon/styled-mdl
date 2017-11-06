/* eslint-disable no-param-reassign */

function shallowRecursively(wrapper, selector, { context }) {
  // Do not try to shallow render empty nodes and host elements
  // (a.k.a primitives). Simply return the wrapper in that case.
  if (wrapper.isEmptyRender() || typeof wrapper.node.type === 'string') {
    return wrapper;
  }

  // Retrieve the context so that we can pass it down to the next wrapper.
  const instance = wrapper.root.instance();
  if (instance.getChildContext) {
    context = { ...context, ...instance.getChildContext() };
  }

  const nextWrapper = wrapper.shallow({ context });

  return selector && wrapper.is(selector)
    ? nextWrapper
    : shallowRecursively(nextWrapper, selector, { context });
}

export default function until(selector, { context } = this.options) {
  return this.single('until', () =>
    shallowRecursively(this, selector, { context }),
  );
}
