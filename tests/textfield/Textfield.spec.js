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

    it('updates internal value state when textfield value changes', () => {
      const event = { target: { value: 'newValue' } };
      textarea().simulate('change', event);

      expect(textarea()).toHaveProp('value', event.target.value);
    });

    it('calls prop [onChange] with event', () => {
      const onChange = jest.fn();
      textfield.setProps({ onChange });

      const event = { target: { value: 'newValue' } };
      textarea().simulate('change', event);

      expect(onChange).toHaveBeenCalledWith(event);
    });

    it('updates internal focused state on focus/blur', () => {
      textarea().simulate('focus');
      expect(textarea()).toHaveProp('focused', true);

      textarea().simulate('blur');
      expect(textarea()).toHaveProp('focused', false);
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

    it('updates internal value state when input value changes', () => {
      const event = { target: { value: 'newValue' } };
      input().simulate('change', event);

      expect(input()).toHaveProp('value', event.target.value);
    });

    it('calls prop [onChange] with event', () => {
      const onChange = jest.fn();
      textfield.setProps({ onChange });

      const event = { target: { value: 'newValue' } };
      input().simulate('change', event);

      expect(onChange).toHaveBeenCalledWith(event);
    });

    it('updates internal focused state on focus/blur', () => {
      input().simulate('focus');
      expect(input()).toHaveProp('focused', true);

      input().simulate('blur');
      expect(input()).toHaveProp('focused', false);
    });
  });

  it('renders an error when one is provided', () => {
    textfield.setProps({ error: 'o snap!' });
    expect(textfield.find(ErrorMessage)).toBePresent();
    expect(textfield.find(ErrorMessage)).toHaveInnerText('o snap!');
  });
});
