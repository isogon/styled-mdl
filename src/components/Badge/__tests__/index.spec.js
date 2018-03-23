import React from 'react'

import { shallow } from 'enzyme'

import Badge, { BadgeBase } from '..'

describe('<Badge />', () => {
  let badge

  beforeEach(() => {
    badge = shallow(<Badge text="foo">Hello World</Badge>).until(BadgeBase)
  })

  it('has the right displayName', () => {
    expect(Badge.displayName).toEqual('Badge')
  })

  it('is deeply extendable', () => {
    expect(typeof Badge.extend).toEqual('function')
    expect(typeof Badge.extend``.extend).toEqual('function')
  })

  it('renders a BadgeWrap with className', () => {
    expect(badge.find('BadgeWrap')).toBePresent()
  })

  it('renders a BadgeText with [prop] text', () => {
    expect(badge.find('BadgeText')).toBePresent()
    expect(badge.find('BadgeText')).toHaveInnerText('foo')
  })

  it('renders its children', () => {
    expect(
      badge
        .find('BadgeWrap')
        .children()
        .at(0)
        .text(),
    ).toEqual('Hello World')
  })
})
