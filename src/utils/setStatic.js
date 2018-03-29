import curry from 'lodash/fp/curry'

const setStatic = curry((key, value) => (Component) => {
  /* eslint-disable no-param-reassign */
  Component[key] = value
  /* eslint-enable no-param-reassign */
  return Component
})

export default setStatic
