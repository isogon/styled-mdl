import { Ripple } from 'material-components';

const renderRipple = mountComponent(Ripple);

describe('<Ripple />', () => {
  let ripple;

  beforeEach(() => {
    ripple = renderRipple();
    jest.useFakeTimers();
  });

  describe('on mouseDown', () => {
    beforeEach(() => ripple.simulate('mouseDown'));

    it('should start animating', () => {
      expect(ripple).toHaveState('isAnimating', true);
    });
  });

  describe('when animating', () => {
    beforeEach(() => ripple.setState({ isAnimating: true }));

    describe('on mouseUp', () => {
      beforeEach(() => ripple.simulate('mouseUp'));

      it('should still be animating', () => {
        expect(ripple).toHaveState('isAnimating', true);
      });

      describe('after 50 ms', () => {
        it('should stop animating', () => {
          jest.runTimersToTime(50);
          expect(ripple).toHaveState('isAnimating', false);
        });
      });
    });
  });
});
