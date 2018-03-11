import getRelativePosition from '../../src/menu/getRelativePosition';

describe('getRelativePosition', () => {
  describe('when scrollX/scrollY is set', () => {
    it('gets the position of the element', () => {
      window.scrollY = 100;
      window.scrollX = 100;
      const element = {
        getBoundingClientRect: jest.fn(() => ({
          top: 250,
          left: 250,
          bottom: 300,
          right: 300,
        })),
      };

      expect(getRelativePosition(element)).toEqual({
        top: 350,
        left: 350,
        bottom: 400,
        right: 400,
      });
    });
  });

  describe('when scrollX/scrollY is not set', () => {
    it('gets the position of the element', () => {
      window.scrollY = 0;
      window.scrollX = 0;
      window.pageXOffset = 100;
      window.pageYOffset = 100;
      const element = {
        getBoundingClientRect: jest.fn(() => ({
          top: 250,
          left: 250,
          bottom: 300,
          right: 300,
        })),
      };

      expect(getRelativePosition(element)).toEqual({
        top: 350,
        left: 350,
        bottom: 400,
        right: 400,
      });
    });
  });
});
