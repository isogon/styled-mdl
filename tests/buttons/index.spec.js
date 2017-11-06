import Button, { ButtonBase } from 'buttons/Button';

const renderButton = shallowComponent(Button);

describe('<Button />', () => {
  let button;

  beforeEach(() => {
    button = renderButton().until(ButtonBase);
  });

  it('is has the right displayName', () => {
    expect(Button.displayName).toEqual('Button');
  });

  it('is deeply extendable', () => {
    expect(typeof Button.extend).toEqual('function');
    expect(typeof Button.extend``.extend).toEqual('function');
  });

  describe('when the [prop] text is defined and there are not children', () => {
    it('renders text inside <button>', () => {
      button.setProps({ children: null, text: 'text' });
      expect(
        button
          .find('ButtonInner')
          .children()
          .at(0)
          .text()
      ).toEqual('text');
    });
  });
});
