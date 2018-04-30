import React from 'react'

import { mount } from 'enzyme'

import {
  InnerCircle,
  OuterCircle,
  RadioButton,
  RadioLabel,
} from '../Radio.style'
import Radio from '..'

describe('<Radio />', () => {
  let radio
  let props

  beforeEach(() => {
    props = {
      name: 'name',
      value: 'value',
      label: 'label',
      disabled: false,
      defaultChecked: false,
    }

    radio = mount(<Radio {...props} />)
  })

  it('has the right displayName', () => {
    expect(Radio.displayName).toEqual('Radio')
  })

  it('is extendable', () => {
    expect(typeof Radio.extend).toEqual('function')
  })

  it('renders the radioStyle on an input', () => {
    expect(radio.find('input')).toHaveProp('type', 'radio')
    expect(radio.find('input')).toHaveProp('className')
  })

  it('renders a RadioLabel with the label text', () => {
    expect(radio.find(RadioLabel)).toBePresent()
    expect(radio.find(RadioLabel)).toHaveText(props.label)
  })

  it('renders a real input[type="radio"]', () => {
    expect(radio.find('input[type="radio"]')).toBePresent()
  })

  it('handles [prop] name, value, and defaultChecked', () => {
    radio.setProps({ defaultChecked: true })
    expect(radio.find('input[type="radio"]')).toHaveProp('name', props.name)
    expect(radio.find('input[type="radio"]')).toHaveProp('value', props.value)
    expect(radio.find('input[type="radio"]')).toHaveProp('defaultChecked', true)
  })

  it('handles [prop] disabled', () => {
    radio.setProps({ disabled: true })
    expect(radio.find(RadioButton)).toHaveProp('disabled', true)
    expect(radio.find(RadioLabel)).toHaveProp('disabled', true)
    expect(radio.find(OuterCircle)).toHaveProp('disabled', true)
    expect(radio.find(InnerCircle)).toHaveProp('disabled', true)
  })

  it('does not render a <RadioLabel> when there is no label', () => {
    radio.setProps({ label: undefined })
    expect(radio.find(RadioLabel)).not.toBePresent()
  })
})
