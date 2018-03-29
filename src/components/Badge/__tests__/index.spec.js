import React from 'react'

import { shallow } from 'enzyme'

import Badge from '..'

describe('<Badge />', () => {
  let badge

  beforeEach(() => {
    badge = shallow(
      <Badge text="foo">
        <div>Hello</div>
      </Badge>,
    )
  })

  it('renders a BadgeWrap', () => {
    expect(badge.find(Badge.Wrap)).toBePresent()
  })

  it('renders a BadgeText with passed in text', () => {
    expect(badge.find(Badge.Text)).toBePresent()
    expect(badge.find(Badge.Text)).toHaveInnerText('foo')
  })

  it('renders its children', () => {
    expect(badge.find(Badge.Wrap).find('div')).toHaveText('Hello')
  })
})
