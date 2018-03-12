import Checkbox from '../../src/components/checkbox/Checkbox';

const props = {
  name: 'name',
  value: 'value',
  label: 'label',
  disabled: false,
  defaultChecked: false,
};

const render = mountComponent(Checkbox, props);

describe('<Checkbox />', () => {
  let checkbox;

  beforeEach(() => {
    checkbox = render();
  });

  it('has the right displayName', () => {
    expect(Checkbox.displayName).toEqual('Checkbox');
  });

  it('is deeply extendable', () => {
    expect(typeof Checkbox.extend).toEqual('function');
    expect(typeof Checkbox.extend``.extend).toEqual('function');
  });

  it('renders an input with checkBoxStyle', () => {
    expect(checkbox.find('input')).toHaveProp('className');
  });

  it('renders a CheckboxLabel with the label text', () => {
    expect(checkbox.find('CheckboxLabel')).toBePresent();
    expect(checkbox.find('CheckboxLabel')).toHaveText(props.label);
  });

  it('renders a real input[type="checkbox"]', () => {
    expect(checkbox.find('input[type="checkbox"]')).toBePresent();
  });

  it('handles [prop] name, value, and defaultChecked', () => {
    checkbox.setProps({ defaultChecked: true });
    expect(checkbox.find('input[type="checkbox"]')).toHaveProp(
      'name',
      props.name,
    );
    expect(checkbox.find('input[type="checkbox"]')).toHaveProp(
      'value',
      props.value,
    );
    expect(checkbox.find('input[type="checkbox"]')).toHaveProp(
      'defaultChecked',
      true,
    );
  });

  it('handles [prop] disabled', () => {
    checkbox = render({ disabled: true });
    expect(checkbox.find('CheckboxButton')).toHaveProp('disabled', true);
    expect(checkbox.find('CheckboxLabel')).toHaveProp('disabled', true);
    expect(checkbox.find('BoxOutline')).toHaveProp('disabled', true);
    expect(checkbox.find('TickOutline')).toHaveProp('disabled', true);
  });

  it('does not render a <CheckboxLabel> when there is no label', () => {
    checkbox.setProps({ label: undefined });
    expect(checkbox.find('CheckboxLabel')).not.toBePresent();
  });
});
