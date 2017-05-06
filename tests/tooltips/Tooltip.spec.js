import Tooltip from 'tooltips/Tooltip';
import {
  TooltipBase,
  TooltipPosition,
  TooltipWrapper,
} from 'tooltips/Tooltip.style';
import Portal from 'react-portal';

const render = shallowComponent(Tooltip, { message: 'message' }, 'children');

describe('<Tooltip>', () => {
  let tooltip;
  let get;

  beforeEach(() => {
    tooltip = render();
    jest.useFakeTimers();
    window.scrollX = 0;
    window.scrollY = 0;
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    tooltip.instance().control = {
      getBoundingClientRect: () => ({
        height: 100,
        width: 100,
        top: 100,
        left: 100,
        right: 200,
        bottom: 200,
      }),
    };
    get = {
      get base() {
        return tooltip.find(TooltipBase);
      },
      get position() {
        return tooltip.find(TooltipPosition);
      },
      get wrapper() {
        return tooltip.find(TooltipWrapper);
      },
      get portal() {
        return tooltip.find(Portal);
      },
    };
  });

  it('sets a ref to the TooltipWrapper', () => {
    get.wrapper.prop('innerRef')('wrapper');
    expect(tooltip.instance().control).toEqual('wrapper');
  });

  it('is positioned above by default', () => {
    expect(get.base).toHaveProp('position', 'above');
  });

  describe('on hover', () => {
    beforeEach(() => {
      get.wrapper.simulate('mouseenter');
    });

    it('opens the portal immediately', () => {
      expect(get.portal).toHaveProp('isOpened', true);
    });

    describe('when [prop] position is "above"', () => {
      it('renders above the wrapped content', () => {
        tooltip.setProps({ position: 'above' });
        get.wrapper.simulate('mouseenter');

        expect(get.position).toHaveProp('x', 150);
        expect(get.position).toHaveProp('y', 100);
      });
    });

    describe('when [prop] position is "below"', () => {
      it('renders below the wrapped content', () => {
        tooltip.setProps({ position: 'below' });
        get.wrapper.simulate('mouseenter');

        expect(get.position).toHaveProp('x', 150);
        expect(get.position).toHaveProp('y', 200);
      });
    });

    describe('when [prop] position is "right"', () => {
      it('renders to the right of the wrapped content', () => {
        tooltip.setProps({ position: 'right' });
        get.wrapper.simulate('mouseenter');

        expect(get.position).toHaveProp('x', 200);
        expect(get.position).toHaveProp('y', 150);
      });
    });

    describe('when [prop] position is "left"', () => {
      it('renders to the left of the wrapped content', () => {
        tooltip.setProps({ position: 'left' });
        get.wrapper.simulate('mouseenter');

        expect(get.position).toHaveProp('x', 100);
        expect(get.position).toHaveProp('y', 150);
      });
    });

    it('starts recalculating position on scroll', () => {
      expect(window.addEventListener).toHaveBeenCalledWith(
        'scroll',
        tooltip.instance().setPosition,
        true,
      );
    });

    it('animates in on the next frame', () => {
      expect(get.position).toHaveProp('isVisible', false);

      jest.runAllTimers();

      expect(get.position).toHaveProp('isVisible', true);
    });

    it('does not try to update if the component is unmounted before the next frame', () => {
      window.console.error = jest.fn();

      tooltip.unmount();
      jest.runAllTimers();

      /*
      React will complain but not actually throw if you try
      to call setState on on an unmounted component, we are
      just listening for those complaints here.
      */

      expect(window.console.error).not.toHaveBeenCalled();
    });

    it('stops updating position when unmounted', () => {
      const setPosition = jest.fn();
      tooltip.instance().setPosition = setPosition;
      tooltip.unmount();
      expect(window.removeEventListener).toHaveBeenCalledWith(
        'scroll',
        setPosition,
        true,
      );
    });
  });

  describe('on leave', () => {
    beforeEach(() => {
      get.wrapper.simulate('mouseenter');
      jest.runAllTimers();
      get.wrapper.simulate('mouseleave');
    });

    it('stops recalculating position on scroll', () => {
      expect(window.removeEventListener).toHaveBeenCalledWith(
        'scroll',
        tooltip.instance().setPosition,
        true,
      );
    });

    it('closes the portal', () => {
      expect(get.portal).toHaveProp('isOpened', false);
    });

    it('resets the isVisible flag', () => {
      expect(get.position).toHaveProp('isVisible', false);
    });
  });
});
