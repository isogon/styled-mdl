import React from 'react'
import { shallow } from 'enzyme'

import ButtonChip, { ButtonChipBase } from '../ButtonChip'

describe('<ButtonChip />', () => {
  let chip

  beforeEach(() => {
    chip = shallow(<ButtonChip>children</ButtonChip>)
  })

  it('has the right displayName', () => {
    expect(ButtonChip.displayName).toEqual('ButtonChip')
  })

  it('is deeply extendable', () => {
    expect(typeof ButtonChip.extend``).toEqual('function')
    expect(typeof ButtonChip.extend``.extend).toEqual('function')
  })

  describe('by default', () => {
    it('does not render a <ChipContact>', () => {
      expect(chip.until(ButtonChipBase).find('ChipContact')).not.toBePresent()
    })
  })

  describe('when there is a contact', () => {
    it('renders a <ChipContact>', () => {
      chip.setProps({ contact: { text: 'foo' } })

      expect(chip.until(ButtonChipBase).find('ChipContact')).toBePresent()
    })
  })
})
