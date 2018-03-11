import Slider, { SliderBase } from '../../src/slider/Slider';

const render = shallowComponent(Slider, { min: 0, max: 100 });

describe('<Slider>', () => {
  let slider;
  let get;

  beforeEach(() => {
    slider = render();
    get = {
      get input() {
        return slider.until(SliderBase).find('SliderInput');
      },
      get bg() {
        return slider.until(SliderBase).find('SliderBackground');
      },
    };
  });

  it('has the right displayName', () => {
    expect(Slider.displayName).toEqual('Slider');
  });

  it('is deeply extendable', () => {
    expect(typeof Slider.extend).toEqual('function');
    expect(typeof Slider.extend``.extend).toEqual('function');
  });

  describe('when user starts moving slider', () => {
    it('makes slider active', () => {
      get.input.simulate('mousedown');
      slider.update();
      expect(get.input).toHaveProp('active', true);
      expect(get.bg).toHaveProp('active', true);
    });
  });

  describe('when user stops moving slider', () => {
    beforeEach(() => {
      get.input.simulate('mousedown');
      get.input.simulate('focus');
      slider.update();

      // invariant
      expect(get.input).toHaveProp('active', true);
      expect(get.input).toHaveProp('focused', true);
    });

    it('makes slider inactive and blurred', () => {
      get.input.simulate('mouseup');
      slider.update();

      expect(get.input).toHaveProp('active', false);
      expect(get.input).toHaveProp('focused', false);
      expect(get.bg).toHaveProp('active', false);
      expect(get.bg).toHaveProp('focused', false);
    });

    it('calls handleBlur', () => {
      slider.instance().handleBlur = jest.fn();
      get.input.simulate('mouseup', 'event');
      slider.update();

      expect(slider.instance().handleBlur).toHaveBeenCalledWith('event');
    });
  });

  describe('when value is defined', () => {
    it('calculates percent from the value between min and max', () => {
      slider = render({ min: 100, max: 200, defaultValue: 110 });
      expect(get.bg).toHaveProp('percent', 0.1);
      expect(get.input).toHaveProp('percent', 0.1);
    });
  });

  describe('when value is undefined', () => {
    it('sets the percent to 0', () => {
      slider = render({ min: 100, max: 200 });
      expect(get.bg).toHaveProp('percent', 0);
      expect(get.input).toHaveProp('percent', 0);
    });
  });
});
