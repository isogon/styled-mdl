import React from 'react'

import { shallow } from 'enzyme'

import { MenuDividerBase } from '../Menu.style'
import MenuDivider from '../MenuDivider'

describe('Divider', () => {
  let divider

  beforeEach(() => {
    divider = shallow(<MenuDivider />)
  })

  describe('refs', () => {
    it('sets a ref to the menuItem', () => {
      divider.find(MenuDividerBase).prop('innerRef')('menu divider ref')
      expect(divider.instance().menuItem).toEqual('menu divider ref')
    })
  })
})
