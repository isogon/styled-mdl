import { SliderBase } from 'slider/Slider';

const render = shallowComponent(SliderBase, { min: 0, max: 100 });

describe('<Slider>', () => {
  let slider;
  let get;

  beforeEach(() => {
    slider = render();
    get = {
      get input() {
        return slider.find('SliderInput');
      },
      get bg() {
        return slider.find('SliderBackground');
      },
    };
  });

  describe('when user starts moving slider', () => {
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

    it('calls handleBlur', () => {
      slider.instance().handleBlur = jest.fn();
      get.input.simulate('mouseup', 'event');

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
