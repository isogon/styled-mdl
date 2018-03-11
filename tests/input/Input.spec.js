import Input from '../../src/input/Input';

const render = shallowComponent(Input);

describe('<Input>', () => {
  let input;

  beforeEach(() => {
    input = render();
  });

  describe('when controlled', () => {
    beforeEach(() => {
      input = render({ value: 10, focused: true, onChange: () => {} });
    });

    it('sets value from prop [value]', () => {
      expect(input).toHaveState('value', 10);
    });

    it('sets focused from prop [value]', () => {
      expect(input).toHaveState('focused', true);
    });

    it('does not use internal value state', () => {
      input.instance().handleChange({ target: { value: 25 } });
      expect(input).toHaveState('value', 10);
    });

    it('does not use internal focused state', () => {
      input.instance().handleBlur();
      expect(input).toHaveState('focused', true);

      input.setProps({ focused: false });

      input.instance().handleFocus();
      expect(input).toHaveState('focused', false);
    });
  });

  describe('when uncontrolled', () => {
    beforeEach(() => {
      input = render();
    });

    describe('when initial values are provided', () => {
      it('uses defaultValue', () => {
        input = render({ defaultValue: 15 });
        expect(input).toHaveState('value', 15);
      });

      it('uses autoFocus', () => {
        input = render({ autoFocus: true });
        expect(input).toHaveState('focused', true);
      });
    });

    it('sets value from internal state', () => {
      input.instance().handleChange({ target: { value: 25 } });
      expect(input).toHaveState('value', 25);
    });

    it('sets focused from internal state', () => {
      input.instance().handleFocus();
      expect(input).toHaveState('focused', true);

      input.instance().handleBlur();
      expect(input).toHaveState('focused', false);
    });
  });

  describe('when input is blurred', () => {
    it('calls [prop] onBlur when it is defined', () => {
      const onBlur = jest.fn();
      input.setProps({ onBlur });
      input.instance().handleBlur('event');

      expect(onBlur).toHaveBeenCalledWith('event');
    });
  });

  describe('when input is focused', () => {
    it('calls [prop] onFocus when it is defined', () => {
      const onFocus = jest.fn();
      input.setProps({ onFocus });
      input.instance().handleFocus('event');

      expect(onFocus).toHaveBeenCalledWith('event');
    });
  });

  describe('when input is changed', () => {
    it('calls [prop] onChange when it is defined', () => {
      const onChange = jest.fn();
      const event = { target: { value: 10 } };
      input.setProps({ onChange });
      input.instance().handleChange(event);

      expect(onChange).toHaveBeenCalledWith(event);
    });
  });
});
