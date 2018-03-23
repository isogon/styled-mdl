import ShallowWrapper from 'enzyme/ShallowWrapper'

function textRecursively(wrapper) {
  return wrapper
    .children()
    .map((child) => {
      if (!child.children().length) {
        if (child.getElement()) {
          return '' // empty element with no children
        }
        return child.text() // text content
      }
      return textRecursively(child) // element has child nodes
    })
    .join('')
}

function textOnly() {
  return this.single('textOnly', () => textRecursively(this))
}

ShallowWrapper.prototype.textOnly = textOnly
