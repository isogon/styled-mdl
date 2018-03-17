import Switch from '../../src/components/switch/Switch'

const props = {
  name: 'name',
  value: 'value',
  label: 'label',
  disabled: false,
  defaultChecked: false,
}

const render = mountComponent(Switch, props)

describe('<Switch />', () => {
  let mdSwitch

  beforeEach(() => {
    mdSwitch = render()
  })

  it('has the right displayName', () => {
    expect(Switch.displayName).toEqual('Switch')
  })

  it('is extendable', () => {
    expect(typeof Switch.extend).toEqual('function')
  })

  it('renders the switchWrap style', () => {
    expect(mdSwitch.find('div').at(0)).toBePresent()
    expect(mdSwitch.find('div').at(0)).toHaveProp('className')
  })

  it('renders a SwitchStyle', () => {
    expect(mdSwitch.find('SwitchStyle')).toBePresent()
  })

  it('renders a SwitchLabel with the label text', () => {
    expect(mdSwitch.find('SwitchLabel')).toBePresent()
    expect(mdSwitch.find('SwitchLabel')).toHaveText(props.label)
  })

  it('renders a real input[type="checkbox"]', () => {
    expect(mdSwitch.find('input[type="checkbox"]')).toBePresent()
  })

  it('handles [prop] name, value, and defaultChecked', () => {
    mdSwitch.setProps({ defaultChecked: true })
    expect(mdSwitch.find('input[type="checkbox"]')).toHaveProp(
      'name',
      props.name,
    )
    expect(mdSwitch.find('input[type="checkbox"]')).toHaveProp(
      'value',
      props.value,
    )
    expect(mdSwitch.find('input[type="checkbox"]')).toHaveProp(
      'defaultChecked',
      true,
    )
  })

  it('handles [prop] disabled', () => {
    mdSwitch = render({ disabled: true })
    expect(mdSwitch.find('SwitchButton')).toHaveProp('disabled', true)
    expect(mdSwitch.find('SwitchLabel')).toHaveProp('disabled', true)
    expect(mdSwitch.find('Track')).toHaveProp('disabled', true)
    expect(mdSwitch.find('Thumb')).toHaveProp('disabled', true)
  })

  it('does not render a <SwitchLabel> when there is no label', () => {
    mdSwitch.setProps({ label: undefined })
    expect(mdSwitch.find('SwitchLabel')).not.toBePresent()
  })
})
