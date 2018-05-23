import React from 'react'
import isFunction from 'lodash/fp/isFunction'

const withTimeouts = (Comp) => {
  class WithTimeouts extends React.Component {
    componentWillUnmount() {
      this.timeouts.forEach((timeout) => {
        clearTimeout(timeout)
      })
      this.animations.forEach((animation) => {
        cancelAnimationFrame(animation)
      })
    }

    setTimeout = (arg1, arg2) =>
      isFunction(arg1)
        ? this.createTimeout(arg2)(arg1)
        : new Promise(this.createTimeout(arg1))

    createTimeout = (n) => (cb) => {
      const timeout = setTimeout(() => {
        this.timeouts.delete(timeout)
        cb()
      }, n)
      this.timeouts.add(timeout)
      return timeout
    }

    requestAnimationFrame = (cb) =>
      cb ? this.createAnimation(cb) : new Promise(this.createAnimation)

    createAnimation = (cb) => {
      const animation = requestAnimationFrame(() => {
        this.animations.delete(animation)
        cb()
      })
      this.timeouts.add(animation)
      return animation
    }

    timeouts = new Set()
    animations = new Set()

    render() {
      return (
        <Comp
          {...this.props}
          setTimeout={this.setTimeout}
          requestAnimationFrame={this.requestAnimationFrame}
        />
      )
    }
  }

  return WithTimeouts
}

export default withTimeouts
