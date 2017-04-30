import { Button, Ripple } from 'material-components';
import StyledButton from 'buttons/Button.style';

const renderButton = shallowComponent(Button);

describe('<Button />', () => {
  let button;

  beforeEach(() => {
    button = renderButton();
  });

  it('auto defocuses after click', () => {
    const e = { preventDefault: jest.fn() };
    button.find(StyledButton).simulate('mouseDown', e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  describe('when the [prop] text is defined and there are not children', () => {
    it('renders text inside <button>', () => {
      button.setProps({ children: null, text: 'text' });
      expect(button.find(StyledButton).children().at(0).text()).toEqual('text');
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

    const toProps = (props) =>
      props.reduce((aggr, prop) => ({ ...aggr, [prop]: true }), {
        ripple: true,
      });

    const lightRippleConditions = [
      ['raised', 'colored'],
      ['raised', 'primary'],
      ['raised', 'accent'],
      ['fab', 'colored'],
      ['fab', 'primary'],
      ['fab', 'accent'],
    ];

    const darkRippleConditions = [
      [],
      ['colored'],
      ['primary'],
      ['accent'],
      ['fab'],
      ['raised'],
    ];

    lightRippleConditions.forEach((props) => {
      const condition = props.join(' and [prop] ');
      it(`has a light ripple when [prop] ${condition} are true`, () => {
        button.setProps(toProps(props));
        expect(button.find(Ripple)).toHaveProp('dark', false);
      });
    });

    darkRippleConditions.forEach((props) => {
      const condition = props.join(' and [prop] ');
      it(`has a dark ripple when [prop] ${condition} are true`, () => {
        button.setProps(toProps(props));
        expect(button.find(Ripple)).toHaveProp('dark', true);
      });
    });
  });
});
