import { ButtonBase } from 'buttons/Button';

const renderButton = shallowComponent(ButtonBase);

describe('<Button />', () => {
  let button;

  beforeEach(() => {
    button = renderButton();
  });

  describe('when the [prop] text is defined and there are not children', () => {
    it('renders text inside <button>', () => {
      button.setProps({ children: null, text: 'text' });
      expect(
        button
          .find('button')
          .children()
          .at(0)
          .text()
      ).toEqual('text');
    });
  });
});
