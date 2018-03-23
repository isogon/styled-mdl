import React from 'react'
import { shallow } from 'enzyme'

import { ChipAction } from '../Chip.style'
import Chip, { ChipBase } from '..'
import ChipContact from '../ChipContact'

describe('<Chip />', () => {
  let chip

  beforeEach(() => {
    chip = shallow(<Chip>children</Chip>)
  })

  it('has the right displayName', () => {
    expect(Chip.displayName).toEqual('Chip')
  })

  it('is deeply extendable', () => {
    expect(typeof Chip.extend).toEqual('function')
    expect(typeof Chip.extend``.extend).toEqual('function')
  })

  describe('by default', () => {
    it('does not render a <ChipAction>', () => {
      expect(chip.until(ChipBase).find('ChipAction')).not.toBePresent()
    })

    it('does not render a <ChipContact>', () => {
      expect(chip.until(ChipBase).find(ChipContact)).not.toBePresent()
    })
  })

  describe('when there is a contact', () => {
    it('renders a <ChipContact>', () => {
      chip.setProps({ contact: { text: 'foo' } })

      expect(chip.until(ChipBase).find(ChipContact)).toBePresent()
    })
  })

  describe('when deletable', () => {
    beforeEach(() => chip.setProps({ deletable: true }))

    it('renders a <ChipAction>', () => {
      expect(chip.until(ChipBase).find(ChipAction)).toBePresent()
    })

    it('calls prop onClickDelete when ChipAction is clicked', () => {
      const onClickDelete = jest.fn()
      const event = 'event'

      chip.setProps({ onClickDelete })

      chip
        .until(ChipBase)
        .find(ChipAction)
        .simulate('click', event)

      expect(onClickDelete).toHaveBeenCalledWith(event)
    })
  })
})
