import curry from 'lodash/fp/curry'

// (a → Boolean) → (a → a) → a → a
const when = curry((f, g, x) => (f(x) ? g(x) : x))

export default when
