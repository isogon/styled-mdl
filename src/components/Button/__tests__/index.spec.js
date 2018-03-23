import Button from '..'

describe('<Button />', () => {
  it('is has the right displayName', () => {
    expect(Button.displayName).toEqual('Button')
  })

  it('is deeply extendable', () => {
    expect(typeof Button.extend).toEqual('function')
    expect(typeof Button.extend``.extend).toEqual('function')
  })
})
