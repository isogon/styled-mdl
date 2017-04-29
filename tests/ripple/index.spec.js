import { Ripple } from 'ripple';
import { Effect, Wrap } from 'ripple/Ripple.style';
import { each } from 'lodash';

const renderRipple = mountComponent(Ripple);
const createClickEvent = ({ target, clientX, clientY, isTouch }) => ({
  currentTarget: {
    getBoundingClientRect: jest.fn(() => target),
  },
  clientX: isTouch ? undefined : clientX,
  clientY: isTouch ? undefined : clientY,
  touches: isTouch ? [{ clientX, clientY }] : undefined,
});

describe('<Ripple />', () => {
  let ripple;
  let instance;

  beforeEach(() => {
    ripple = renderRipple();
    instance = ripple.instance();
    jest.useFakeTimers();
  });

  it('renders a <Wrap />', () => {
    expect(ripple.find(Wrap)).toBePresent();
  });

  it('passes all props to <Wrap />', () => {
    const mockProps = { foo: Math.random(), bar: Math.random() };
    const expected = expect.objectContaining(mockProps);
    ripple.setProps(mockProps);
    expect(ripple.find(Wrap).props()).toEqual(expected);
  });

  it('renders a <Effect />', () => {
    expect(ripple.find(Effect)).toBePresent();
  });

  it('passes all state as props to <Effect />', () => {
    const mockState = { foo: Math.random(), bar: Math.random() };
    const expected = expect.objectContaining(mockState);
    ripple.setState(mockState);
    expect(ripple.find(Effect).props()).toEqual(expected);
  });

  describe('init', () => {
    it('sets opacity to 0', () => {
      expect(ripple).toHaveState('opacity', 0);
    });
  });

  describe('componentDidMount', () => {
    it('sets a ref to the wrapper', () => {
      instance.componentDidMount();
      expect(instance.wrapper).toBeDefined();
    });

    it('gets the size of the wrappper and computes the ripple size', () => {
      instance.wrapper.getBoundingClientRect = jest.fn(() => ({
        height: 3,
        width: 4,
      }));
      instance.componentDidMount();
      expect(instance.wrapper.getBoundingClientRect).toHaveBeenCalled();
      expect(instance.size).toEqual('12px');
    });
  });

  describe('[method] handleMouseDown', () => {
    it('is bound to Wrap [prop] onMouseDown', () => {
      expect(ripple.find(Wrap)).toHaveProp(
        'onMouseDown',
        instance.handleMouseDown,
      );
    });

    const testEvents = {
      'a keyboard click': {
        event: createClickEvent({
          clientX: 0,
          clientY: 0,
          target: { width: 10, height: 6 },
        }),
        expectedBehavior: 'centers the ripple on its parent',
        expectedTransform: 'translate(5px, 3px)',
      },
      'a touch': {
        event: createClickEvent({
          clientX: 120,
          clientY: 130,
          isTouch: true,
          target: { left: 100, top: 100 },
        }),
        expectedBehavior: 'centers the ripple on the touch',
        expectedTransform: 'translate(20px, 30px)',
      },
      'a click': {
        event: createClickEvent({
          clientX: 120,
          clientY: 130,
          target: { left: 100, top: 100 },
        }),
        expectedBehavior: 'centers the ripple on the touch',
        expectedTransform: 'translate(20px, 30px)',
      },
    };

    each(testEvents, ({
      event,
      expectedBehavior,
      expectedTransform,
    }, testName) => {
      describe(`when event is ${testName}`, () => {
        beforeEach(() => {
          instance.size = Math.random();
          instance.handleMouseDown(event);
        });

        it('does not try to animate intial setup', () => {
          expect(ripple).toHaveState('shouldAnimate', false);
        });

        it('sets the final size of the ripple', () => {
          expect(ripple).toHaveState('size', instance.size);
        });

        it('makes the ripple visible', () => {
          expect(ripple.state('opacity')).toBeGreaterThan(0);
        });

        it(`${expectedBehavior} and scales it to be very small`, () => {
          expect(ripple).toHaveState(
            'transform',
            `translate(-50%, -50%) ${expectedTransform} scale3d(0.0001, 0.0001, 1)`,
          );
        });

        describe('on the next animationFrame', () => {
          it('starts scaling to full size', () => {
            jest.runOnlyPendingTimers();
            expect(ripple).toHaveState(
              'transform',
              `translate(-50%, -50%) ${expectedTransform} scale3d(1, 1, 1)`,
            );
            expect(ripple).toHaveState('shouldAnimate', true);
          });
        });
      });
    });
  });

  describe('[method] handleMouseUp', () => {
    it('is bound to Wrap [prop] onMouseUp', () => {
      expect(ripple.find(Wrap)).toHaveProp('onMouseUp', instance.handleMouseUp);
    });

    it('sets [state] opacity to 0', () => {
      ripple.setState({ opacity: Math.random() });
      instance.handleMouseUp();
      expect(ripple).toHaveState('opacity', 0);
    });
  });
});
