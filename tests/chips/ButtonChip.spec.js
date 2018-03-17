import ButtonChip, {
  ButtonChipBase,
} from '../../src/components/chips/ButtonChip'

const render = shallowComponent(ButtonChip, {}, 'children')

describe('<ButtonChip />', () => {
  let chip
  let get

  beforeEach(() => {
    chip = render()

    get = {
      get base() {
        return chip.until(ButtonChipBase)
      },
      get ChipContact() {
        return get.base.find('ChipContact')
      },
    }
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
