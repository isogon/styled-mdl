import Button, { ButtonBase } from '../../src/components/buttons/Button'

const render = shallowComponent(Button)

describe('<Button />', () => {
  it('is has the right displayName', () => {
    expect(Button.displayName).toEqual('Button')
  })

  it('is deeply extendable', () => {
    expect(typeof Button.extend).toEqual('function')
    expect(typeof Button.extend``.extend).toEqual('function')
  })

  describe('when the [prop] text is defined and there are not children', () => {
    it('renders text inside <button>', () => {
      const button = render().until(ButtonBase)
      button.setProps({ children: null, text: 'text' })
      expect(button).toHaveInnerText('text')
    })
  })
})
