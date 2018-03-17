import ShallowWrapper from 'enzyme/ShallowWrapper'

/* eslint-disable no-param-reassign */
// Copied from gist
// https://gist.github.com/matthieuprat/5fd37abbd4a4002e6cfe0c73ae54cda8
function shallowRecursively(wrapper, selector) {
  // Do not try to shallow render empty nodes and host elements
  // (a.k.a primitives). Simply return the wrapper in that case.
  if (
    wrapper.isEmptyRender() ||
    typeof wrapper.getElement().type === 'string'
  ) {
    return wrapper
  }
  //
  // console.log(wrapper.getElement().type);
  // console.log(selector);

  return selector && wrapper.is(selector)
    ? wrapper.dive()
    : shallowRecursively(wrapper.dive(), selector)
}

function until(selector) {
  return this.single('until', () => shallowRecursively(this, selector))
}

ShallowWrapper.prototype.until = until
