import MenuItem from 'menu/MenuItem';

import { MenuItem as MenuItemBase } from 'menu/Menu.style';

const render = shallowComponent(MenuItem);

describe('MenuItem', () => {
  let menuItem;
  const menuHeight = 500;
  const itemOffset = 100;
  const itemHeight = 50;
  const duration = 2;


  beforeEach(() => {
    menuItem = render();
    menuItem.instance().menuItem = {
      parentNode: {
        parentNode: {
          getBoundingClientRect: () => ({ height: menuHeight }),
        },
      },
      offsetTop: itemOffset,
      getBoundingClientRect: () => ({
        height: itemHeight,
      }),
    };
  });

  it('defaults getTransitionDelay to 0', () => {
    const actual = menuItem.find(MenuItemBase).prop('getTransitionDelay')(duration);
    expect(actual).toEqual(0);
  });

  describe('refs', () => {
    it('sets a ref to the menuItem', () => {
      menuItem.find(MenuItemBase).prop('innerRef')('menu item ref');
      expect(menuItem.instance().menuItem).toEqual('menu item ref');
    });
  });

  describe('when receiving new props but not becoming visible', () => {
    it('does not attempt to recalculate transition delay', () => {
      menuItem.setProps({ isVisible: true, fadeDown: true });
      menuItem.instance().menuItem = {
        ...menuItem.instance().menuItem,
        getBoundingClientRect: jest.fn(),
      };

      menuItem.setProps({ isVisible: false, fadeDown: true });

      expect(
        menuItem.instance().menuItem.getBoundingClientRect
      ).not.toHaveBeenCalled();
    });
  });

  describe('when it becomes visible', () => {
    describe('when it should fade down', () => {
      beforeEach(() => {
        menuItem.setProps({ isVisible: true, fadeDown: true });
      });

      it('fades menuItem in based on its distance the top', () => {
        const actual = menuItem.find(MenuItemBase).prop('getTransitionDelay')(duration);
        const expected = itemOffset / menuHeight * duration;

        expect(actual).toEqual(expected);
      });
    });
    describe('when it should fade up', () => {
      beforeEach(() => {
        menuItem.setProps({ isVisible: true, fadeDown: false });
      });

      it('fades menuItem in based on its distance the bottom', () => {
        const actual = menuItem.find(MenuItemBase).prop('getTransitionDelay')(duration);
        const expected = -(itemOffset + itemHeight - menuHeight) / menuHeight * duration;

        expect(actual).toEqual(expected);
      });
    });
  });
});
