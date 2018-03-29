import isFunction from 'lodash/fp/isFunction'

import mapProps from './mapProps'

const withProps = (input) => {
  const hoc = mapProps((props) => ({
    ...props,
    ...(isFunction(input) ? input(props) : input),
  }))

  return hoc
}

export default withProps
