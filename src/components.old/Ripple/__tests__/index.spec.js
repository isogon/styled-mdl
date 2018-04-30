import { each } from 'lodash'
import React from 'react'

import { shallow } from 'enzyme'

import { RippleBase } from '..'
import { RippleEffect } from '../Ripple.style'

const createClickEvent = ({ target, clientX, clientY, isTouch }) => ({
  currentTarget: {
    getBoundingClientRect: jest.fn(() => target),
  },
  clientX: isTouch ? undefined : clientX,
  clientY: isTouch ? undefined : clientY,
  touches: isTouch ? [{ clientX, clientY }] : undefined,
})

describe('<Ripple />', () => {
  let ripple
  let instance

  beforeEach(() => {
    React.createRef = () => ({
      getBoundingClientRect: () => ({
        height: 3,
        width: 4,
      }),
    })
    ripple = shallow(<RippleBase />)
    instance = ripple.instance()
  })

  it('sets style from the state for <RippleEffect />', () => {
    ripple.setState({
      size: '100px',
      transform: 'the transform',
      opacity: '0.1',
      shouldAnimate: true,
    })
    ripple.update()
    expect(ripple.find(RippleEffect).prop('style')).toEqual({
      height: '100px',
      width: '100px',
      transform: 'the transform',
      opacity: '0.1',
      transitionProperty: 'transform, width, height, opacity',
    })
  })

  it('clears the transitionProperties for <RippleEffect /> when it should not animate', () => {
    ripple.setState({
      shouldAnimate: false,
    })
    expect(ripple.find(RippleEffect).prop('style').transitionProperty).toEqual(
      'none',
    )
  })

  describe('init', () => {
    it('sets opacity to 0', () => {
      expect(ripple.find(RippleEffect).prop('style').opacity).toEqual(0)
    })
  })

  describe('componentDidMount', () => {
    it('gets the size of the wrappper and computes the ripple size', () => {
      instance.wrapper.getBoundingClientRect = jest.fn(() => ({
        height: 3,
        width: 4,
      }))
      instance.componentDidMount()
      expect(instance.wrapper.getBoundingClientRect).toHaveBeenCalled()
      expect(instance.size).toEqual('12px')
    })
  })

  describe('[method] handleMouseDown', () => {
    it('is bound to Wrap [prop] onMouseDown', () => {
      expect(ripple.find('div').at(0)).toHaveProp(
        'onMouseDown',
        instance.handleMouseDown,
      )
    })

    const testEvents = {
      'a keyboard click': {
        event: createClickEvent({
          clientX: 0,
          clientY: 0,
          target: { width: 10, height: 6 },
        }),
        expectedBehavior: 'centers the ripple on its parent',
        expectedTransform: 'translate(5px, 3px)',
      },
      'a touch': {
        event: createClickEvent({
          clientX: 120,
          clientY: 130,
          isTouch: true,
          target: { left: 100, top: 100 },
        }),
        expectedBehavior: 'centers the ripple on the touch',
        expectedTransform: 'translate(20px, 30px)',
      },
      'a click': {
        event: createClickEvent({
          clientX: 120,
          clientY: 130,
          target: { left: 100, top: 100 },
        }),
        expectedBehavior: 'centers the ripple on the touch',
        expectedTransform: 'translate(20px, 30px)',
      },
    }

    each(
      testEvents,
      ({ event, expectedBehavior, expectedTransform }, testName) => {
        describe(`when event is ${testName}`, () => {
          beforeEach(() => {
            instance.size = Math.random()
            instance.handleMouseDown(event)
            jest.useFakeTimers()
          })

          it('does not try to animate intial setup', () => {
            expect(ripple).toHaveState('shouldAnimate', false)
          })

          it('sets the final size of the ripple', () => {
            expect(ripple).toHaveState('size', instance.size)
          })

          it('makes the ripple visible', () => {
            expect(ripple.state('opacity')).toBeGreaterThan(0)
          })

          it(`${expectedBehavior} and scales it to be very small`, () => {
            expect(ripple).toHaveState(
              'transform',
              `translate(-50%, -50%) ${expectedTransform} scale3d(0.0001, 0.0001, 1)`,
            )
          })

          describe('on the next animationFrame', () => {
            it('starts scaling to full size', () => {
              jest.runAllTimers()
              expect(ripple).toHaveState(
                'transform',
                `translate(-50%, -50%) ${expectedTransform} scale3d(1, 1, 1)`,
              )
              expect(ripple).toHaveState('shouldAnimate', true)
            })
          })
        })
      },
    )
  })

  describe('on mouse up', () => {
    it('sets [state] opacity to 0', () => {
      ripple.setState({ opacity: Math.random() })
      ripple
        .find('div')
        .at(0)
        .simulate('mouseup')
      ripple.until(RippleBase).update()
      expect(ripple).toHaveState('opacity', 0)
    })
  })
})
