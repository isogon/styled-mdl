import React from 'react';
import Menu from 'menu/Menu';
import MenuItem from 'menu/MenuItem';
import Button from 'buttons/Button';
import Portal from 'react-portal';
import { shallow } from 'enzyme';
import { MenuContainer, MenuOutline, MenuBase } from 'menu/Menu.style';

const render = shallowComponent(
  Menu,
  {
    control: <Button>Click Me</Button>,
  },
  <MenuItem />
);

describe('<Menu>', () => {
  let menu;
  let get;
  let setup;
  let open;

  beforeEach(() => {
    menu = render();
    jest.useFakeTimers();
    get = {
      get control() {
        return shallow(menu.find(Portal).prop('openByClickOn')).find(Button);
      },
      get portal() {
        return menu.find(Portal);
      },
      get menuItem() {
        return menu
          .find(MenuBase)
          .children()
          .at(0);
      },
      get menuBase() {
        return menu.find(MenuBase);
      },
      get menuContainer() {
        return menu.find(MenuContainer);
      },
    };
    setup = (props = {}, state = {}) => {
      menu.setProps(props);
      menu.setState(state);

      menu.instance().menu = {
        getBoundingClientRect: jest.fn(() => ({
          height: 500,
          width: 200,
        })),
      };
      menu.instance().control = {
        getBoundingClientRect: jest.fn(() => ({
          top: 250,
          left: 250,
          bottom: 300,
          right: 500,
        })),
      };

      window.scrollY = 100;
      window.scrollX = 100;
    };
    open = () => {
      get.control.simulate('click');
      // React portal calls this prop when control is clicked
      get.portal.prop('onOpen')();
      jest.runAllTimers();
    };
  });

  describe('when the menu is open and then clicked', () => {
    beforeEach(() => {
      setup({}, { isVisible: false });
      open();
    });

    it('does not try to update if the component is unmounted before 100ms', () => {
      window.console.error = jest.fn();

      jest.runTimersToTime(99);
      menu.unmount();
      jest.runAllTimers();

      /*
      React will complain but not actually throw if you try
      to call setState on on an unmounted component, we are
      just listening for those complaints here.
      */

      expect(window.console.error).not.toHaveBeenCalled();
    });

    it('closes in 100ms', () => {
      get.menuContainer.simulate('click');
      jest.runTimersToTime(99);

      // menu still open
      expect(menu.find(MenuContainer)).toHaveProp('isVisible', true);
      expect(menu.find(MenuBase)).toHaveProp('isVisible', true);
      expect(menu.find(MenuOutline)).toHaveProp('isVisible', true);

      jest.runTimersToTime(100);

      // menu closed
      expect(menu.find(MenuContainer)).toHaveProp('isVisible', false);
      expect(menu.find(MenuBase)).toHaveProp('isVisible', false);
      expect(menu.find(MenuOutline)).toHaveProp('isVisible', false);
    });
  });

  describe('when the control is clicked', () => {
    describe('when the menu is already open', () => {
      beforeEach(() => {
        window.removeEventListener = jest.fn();
        setup({}, { isVisible: false });
        open();

        // menu is open
        expect(menu.find(MenuContainer)).toHaveProp('isVisible', true);
        expect(menu.find(MenuBase)).toHaveProp('isVisible', true);
        expect(menu.find(MenuOutline)).toHaveProp('isVisible', true);

        // unfortunately both onOpen and onClose will run,
        // onOpen is triggered by clicking the control,
        // onClose is triggered by the outside click
        get.control.simulate('click');
        get.portal.prop('onOpen')();
        get.portal.prop('onClose')();
      });

      it('hides the menu on the next animation frame', () => {
        jest.runAllTimers();
        expect(menu.find(MenuContainer)).toHaveProp('isVisible', false);
        expect(menu.find(MenuBase)).toHaveProp('isVisible', false);
        expect(menu.find(MenuOutline)).toHaveProp('isVisible', false);
      });

      it('does not try to update if the component is unmounted before the next frame', () => {
        window.console.error = jest.fn();

        menu.unmount();
        jest.runAllTimers();

        /*
        React will complain but not actually throw if you try
        to call setState on on an unmounted component, we are
        just listening for those complaints here.
        */

        expect(window.console.error).not.toHaveBeenCalled();
      });

      it('stops listening for any scroll events', () => {
        expect(window.removeEventListener).toHaveBeenCalledWith(
          'scroll',
          menu.instance().setMenuPosition,
          true
        );
      });
    });

    describe('when the menu is not already open', () => {
      beforeEach(() => {
        setup({}, { isVisible: false });
      });

      it('starts adjusting position on all scroll events', () => {
        window.addEventListener = jest.fn();
        open();

        expect(window.addEventListener).toHaveBeenCalledWith(
          'scroll',
          menu.instance().setMenuPosition,
          true
        );
      });

      it('stops listening for scroll when component unmounts', () => {
        window.removeEventListener = jest.fn();
        const { setMenuPosition } = menu.instance();
        open();

        menu.unmount();

        expect(window.removeEventListener).toHaveBeenCalledWith(
          'scroll',
          setMenuPosition,
          true
        );
      });

      it('does not try to update if component is unmounted before next animation frame', () => {
        get.control.simulate('click');
        get.portal.prop('onOpen')();
        window.console.error = jest.fn();

        menu.unmount();
        jest.runAllTimers();

        /*
        React will complain but not actually throw if you try
        to call setState on on an unmounted component, we are
        just listening for those complaints here.
        */

        expect(window.console.error).not.toHaveBeenCalled();
      });

      it('makes the menu and menuItems visible', () => {
        open();

        expect(menu.find(MenuContainer)).toHaveProp('isVisible', true);
        expect(menu.find(MenuBase)).toHaveProp('isVisible', true);
        expect(menu.find(MenuOutline)).toHaveProp('isVisible', true);
        expect(get.menuItem).toHaveProp('isVisible', true);
      });

      it('sets height', () => {
        open();

        expect(menu.find(MenuContainer)).toHaveProp('height', 500);
        expect(menu.find(MenuBase)).toHaveProp('height', 500);
        expect(menu.find(MenuOutline)).toHaveProp('height', 500);
      });

      it('sets width', () => {
        open();

        expect(menu.find(MenuContainer)).toHaveProp('width', 200);
        expect(menu.find(MenuBase)).toHaveProp('width', 200);
        expect(menu.find(MenuOutline)).toHaveProp('width', 200);
      });

      describe('when [prop] bottomRight is true', () => {
        beforeEach(() => {
          setup({ bottomRight: true }, { isVisible: false });
        });

        it('aligns to the right edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('left', 400);
          expect(menu.find(MenuBase)).toHaveProp('left', 400);
          expect(menu.find(MenuOutline)).toHaveProp('left', 400);
        });

        it('bottom edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('top', 400);
          expect(menu.find(MenuBase)).toHaveProp('top', 400);
          expect(menu.find(MenuOutline)).toHaveProp('top', 400);
        });

        it('sets menuItems to fade in up', () => {
          open();
          expect(get.menuItem).toHaveProp('fadeDown', true);
        });
      });

      describe('when [prop] topLeft is true', () => {
        beforeEach(() => {
          setup({ topLeft: true }, { isVisible: false });
        });

        it('aligns to the left edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('left', 350);
          expect(menu.find(MenuBase)).toHaveProp('left', 350);
          expect(menu.find(MenuOutline)).toHaveProp('left', 350);
        });

        it('top edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('top', -150);
          expect(menu.find(MenuBase)).toHaveProp('top', -150);
          expect(menu.find(MenuOutline)).toHaveProp('top', -150);
        });

        it('sets menuItems to fade in down', () => {
          open();
          expect(get.menuItem).toHaveProp('fadeDown', false);
        });
      });

      describe('when [prop] topRight is true', () => {
        beforeEach(() => {
          setup({ topRight: true }, { isVisible: false });
        });

        it('aligns to the right edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('left', 400);
          expect(menu.find(MenuBase)).toHaveProp('left', 400);
          expect(menu.find(MenuOutline)).toHaveProp('left', 400);
        });

        it('top edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('top', -150);
          expect(menu.find(MenuBase)).toHaveProp('top', -150);
          expect(menu.find(MenuOutline)).toHaveProp('top', -150);
        });

        it('sets menuItems to fade in down', () => {
          open();
          expect(get.menuItem).toHaveProp('fadeDown', false);
        });
      });

      describe('by default', () => {
        beforeEach(() => {
          setup({}, { isVisible: false });
        });

        it('aligns to the left edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('left', 350);
          expect(menu.find(MenuBase)).toHaveProp('left', 350);
          expect(menu.find(MenuOutline)).toHaveProp('left', 350);
        });

        it('bottom edge of the control', () => {
          open();

          expect(menu.find(MenuContainer)).toHaveProp('top', 400);
          expect(menu.find(MenuBase)).toHaveProp('top', 400);
          expect(menu.find(MenuOutline)).toHaveProp('top', 400);
        });

        it('sets menuItems to fade in up', () => {
          open();
          expect(get.menuItem).toHaveProp('fadeDown', true);
        });
      });
    });
  });
});
