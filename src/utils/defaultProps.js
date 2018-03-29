import { createFactory } from 'react'

const defaultProps = (props) => (Component) => {
  const factory = createFactory(Component)
  const DefaultProps = (ownerProps) => factory(ownerProps)
  DefaultProps.defaultProps = props
  return DefaultProps
}

export default defaultProps
