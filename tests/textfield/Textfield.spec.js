import Textfield, { TextfieldBase } from 'textfield/Textfield';

const render = shallowComponent(Textfield);

describe('<Textfield />', () => {
  let textfield;
  let get;

  beforeEach(() => {
    textfield = render();
    get = {
      get label() {
        return textfield.until(TextfieldBase).find('Label');
      },
      get input() {
        return textfield.until(TextfieldBase).find('Input');
      },
      get textarea() {
        return textfield.until(TextfieldBase).find('Textarea');
      },
      get errorMessage() {
        return textfield.until(TextfieldBase).find('ErrorMessage');
      },
    };
  });

  it('has the right displayName', () => {
    expect(Textfield.displayName).toEqual('Textfield');
  });

  it('is deeply extendable', () => {
    expect(typeof Textfield.extend).toEqual('function');
    expect(typeof Textfield.extend``.extend).toEqual('function');
  });

  it('renders a Label', () => {
    expect(textfield.until(TextfieldBase).find('Label')).toBePresent();
  });

  describe('when [prop] multiline is true', () => {
    beforeEach(() => {
      textfield = render({ defaultValue: 'foo', multiLine: true });
    });

    it('converts defaultValue into internal state', () => {
      textfield.setProps({ defaultValue: 'foo' });
      expect(get.textarea).not.toHaveProp('defaultValue');
      expect(get.textarea).toHaveProp('value', 'foo');
    });

    it('renders a Textarea', () => {
      expect(get.textarea).toBePresent();
    });
  });

  describe('when [prop] multiline is false', () => {
    beforeEach(() => {
      textfield = render({ defaultValue: 'foo', multiLine: false });
    });

    it('converts defaultValue into internal state', () => {
      expect(get.input).not.toHaveProp('defaultValue');
      expect(get.input).toHaveProp('value', 'foo');
    });

    it('renders an input', () => {
      expect(get.input).toBePresent();
    });
  });

  it('renders an error when one is provided', () => {
    textfield.setProps({ error: 'o snap!' });
    expect(get.errorMessage).toBePresent();
    expect(get.errorMessage).toHaveInnerText('o snap!');
  });
});
