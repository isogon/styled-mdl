import Slider from 'slider/Slider';
import { SliderInput, SliderBackground } from 'slider/Slider.style';

const render = shallowComponent(Slider, { min: 0, max: 100 });

describe('<Slider>', () => {
  let slider;
  let get;

  beforeEach(() => {
    slider = render();
    get = {
      get input() {
        return slider.find(SliderInput);
      },
      get bg() {
        return slider.find(SliderBackground);
      },
    };
  });

  describe('when controlled', () => {
    beforeEach(() => {
      slider = render({ value: 10, focused: true });
    });

    it('sets value from prop [value]', () => {
      expect(get.input).toHaveProp('value', 10);
    });

    it('sets focused from prop [value]', () => {
      expect(get.input).toHaveProp('focused', true);
      expect(get.bg).toHaveProp('focused', true);
    });

    it('does not use internal value state', () => {
      get.input.simulate('change', { target: { value: 25 } });
      expect(get.input).toHaveProp('value', 10);
    });

    it('does not use internal focused state', () => {
      get.input.simulate('blur');
      expect(get.input).toHaveProp('focused', true);

      slider.setProps({ focused: false });

      get.input.simulate('focus');
      expect(get.input).toHaveProp('focused', false);
    });
  });

  describe('when uncontrolled', () => {
    beforeEach(() => {
      slider = render();
    });

    describe('when initial values are provided', () => {
      it('uses defaultValue', () => {
        slider = render({ defaultValue: 15 });
        expect(get.input).toHaveProp('value', 15);
      });

      it('uses autoFocus', () => {
        slider = render({ autoFocus: true });
        expect(get.input).toHaveProp('focused', true);
        expect(get.bg).toHaveProp('focused', true);
      });
    });

    it('sets value from internal state', () => {
      get.input.simulate('change', { target: { value: 25 } });
      expect(get.input).toHaveProp('value', 25);
    });

    it('sets focused from internal state', () => {
      get.input.simulate('focus');
      expect(get.input).toHaveProp('focused', true);

      get.input.simulate('blur');
      expect(get.input).toHaveProp('focused', false);
    });

    it('sets focused from internal state', () => {
      get.input.simulate('focus');
      expect(get.input).toHaveProp('focused', true);

      get.input.simulate('blur');
      expect(get.input).toHaveProp('focused', false);
    });
  });

  describe('user starts moving slider', () => {
    it('makes slider active', () => {
      get.input.simulate('mousedown');
      expect(get.input).toHaveProp('active', true);
      expect(get.bg).toHaveProp('active', true);
    });
  });

  describe('when user stops moving slider', () => {
    beforeEach(() => {
      get.input.simulate('mousedown');
      get.input.simulate('focus');

      // invariant
      expect(get.input).toHaveProp('active', true);
      expect(get.input).toHaveProp('focused', true);
    });

    it('makes slider inactive and blurred', () => {
      get.input.simulate('mouseup');

      expect(get.input).toHaveProp('active', false);
      expect(get.input).toHaveProp('focused', false);
      expect(get.bg).toHaveProp('active', false);
      expect(get.bg).toHaveProp('focused', false);
    });

    it('calls [prop] onBlur when it is defined', () => {
      const onBlur = jest.fn();
      slider.setProps({ onBlur });
      get.input.simulate('mouseup', 'event');

      expect(onBlur).toHaveBeenCalledWith('event');
    });
  });

  describe('when input is blurred', () => {
    it('calls [prop] onBlur when it is defined', () => {
      const onBlur = jest.fn();
      slider.setProps({ onBlur });
      get.input.simulate('blur', 'event');

      expect(onBlur).toHaveBeenCalledWith('event');
    });
  });

  describe('when input is focused', () => {
    it('calls [prop] onFocus when it is defined', () => {
      const onFocus = jest.fn();
      slider.setProps({ onFocus });
      get.input.simulate('focus', 'event');

      expect(onFocus).toHaveBeenCalledWith('event');
    });
  });

  describe('when input is changed', () => {
    it('calls [prop] onChange when it is defined', () => {
      const onChange = jest.fn();
      const event = { target: { value: 10 } };
      slider.setProps({ onChange });
      get.input.simulate('change', event);

      expect(onChange).toHaveBeenCalledWith(event);
    });
  });

  describe('calculations', () => {
    beforeEach(() => {
      slider = render({ min: 100, max: 200 });
    });

    it('sets percent filled from value when it is defined', () => {
      slider.setProps({ value: 110 });
      expect(get.bg).toHaveProp('percentFilled', 0.1);
    });

    it('sets percent filled to 0 when value is undefined', () => {
      expect(get.bg).toHaveProp('percentFilled', 0);
    });

    it('sets percent empty from value when it is defined', () => {
      slider.setProps({ value: 130 });
      expect(get.bg).toHaveProp('percentEmpty', 0.7);
    });

    it('sets percent empty to 1 when value is undefined', () => {
      expect(get.bg).toHaveProp('percentEmpty', 1);
    });

    it('sets isLowestValue flag when value equals the min', () => {
      slider.setProps({ value: 15, min: 15 });
      expect(get.bg).toHaveProp('isLowestValue', true);
      expect(get.input).toHaveProp('isLowestValue', true);
    });

    it('sets isLowestValue flag when value is undefined', () => {
      expect(get.bg).toHaveProp('isLowestValue', true);
      expect(get.input).toHaveProp('isLowestValue', true);
    });

    it('does not set isLowestValue flag when value does not equal the min', () => {
      slider.setProps({ value: 16, min: 15 });
      expect(get.bg).toHaveProp('isLowestValue', false);
      expect(get.input).toHaveProp('isLowestValue', false);
    });
  });
});
