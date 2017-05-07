import Textfield from 'textfield/Textfield';
import {
  TextfieldBase,
  Input,
  Textarea,
  Label,
  ErrorMessage,
} from 'textfield/Textfield.style';

const render = shallowComponent(Textfield);

describe('<Textfield />', () => {
  let textfield;

  beforeEach(() => {
    textfield = render();
  });

  it('renders a Textfieldbase', () => {
    expect(textfield.find(TextfieldBase)).toBePresent();
  });

  it('renders a Label', () => {
    expect(textfield.find(Label)).toBePresent();
  });

  describe('when [prop] multiline is true', () => {
    const textarea = () => textfield.find(Textarea);

    beforeEach(() => {
      textfield.setProps({ multiLine: true });
    });

    it('renders a Textarea', () => {
      expect(textarea()).toBePresent();
    });
  });

  describe('when [prop] multiline is false', () => {
    const input = () => textfield.find(Input);

    beforeEach(() => {
      textfield.setProps({ multiLine: false });
    });

    it('renders an input', () => {
      expect(input()).toBePresent();
    });
  });

  it('renders an error when one is provided', () => {
    textfield.setProps({ error: 'o snap!' });
    expect(textfield.find(ErrorMessage)).toBePresent();
    expect(textfield.find(ErrorMessage)).toHaveInnerText('o snap!');
  });
});
