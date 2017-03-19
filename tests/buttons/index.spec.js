import { Button, Ripple } from 'material-components';

const renderButton = mountComponent(Button);

describe('<Button />', () => {
  let button;

  beforeEach(() => {
    button = renderButton();
  });

  it('should render a <button> tag', () => {
    expect(button.find('button')).toBePresent();
  });

  describe('inner <button>', () => {
    it('should have a className attribute', () => {
      expect(button.find('button')).toHaveProp('className');
    });
  });

  it('auto defocuses after click', () => {
    const e = { preventDefault: jest.fn() };
    button.simulate('mouseDown', e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  describe('when the [prop] text is defined and there are not children', () => {
    it('renders text inside <button>', () => {
      button.setProps({ children: null, text: 'text' });
      expect(button.find('button')).toIncludeText('text');
    });
  });

  describe('ripples', () => {
    it('it defaults [prop] ripple to true', () => {
      expect(button).toHaveProp('ripple', true);
    });

    it('it shows ripples when [prop] ripple is true', () => {
      expect(button.find(Ripple)).toBePresent();
    });

    it('it hides ripples when [prop] ripple is false', () => {
      button.setProps({ ripple: false });
      expect(button.find(Ripple)).not.toBePresent();
    });

    it('it hides ripples when [prop] disabled is true', () => {
      button.setProps({ disabled: true });
      expect(button.find(Ripple)).not.toBePresent();
    });

    it('it hides ripples when [prop] icon is true', () => {
      button.setProps({ icon: true });
      expect(button.find(Ripple)).not.toBePresent();
    });
  });
});
