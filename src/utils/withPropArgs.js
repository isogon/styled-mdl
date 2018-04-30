import always from 'lodash/fp/constant'
import isFunction from 'lodash/fp/isFunction'

const withPropArgs = (fn) => (...args) => {
  const fnArgs = args.map((arg) => (isFunction(arg) ? arg : always(arg)))
  return (props) => fn(...fnArgs.map((arg) => arg(props)))
}

export default withPropArgs
