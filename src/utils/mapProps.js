import { createFactory } from 'react'
import compose from 'lodash/fp/flowRight'

const mapProps = (f) => (BaseComponent) =>
  compose(createFactory(BaseComponent), f)

export default mapProps
