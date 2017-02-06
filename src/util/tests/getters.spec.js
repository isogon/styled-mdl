import entries from 'lodash/entries';

import { defaultTheme } from '../../theme';
import getters from '../getters';

describe('getters', () => {
  let get;
  let props;

  beforeEach(() => {
    jest.unmock('material-components');

    get = getters;
    props = { theme: { ...defaultTheme } };
  });

  it('should be able to get all props from default theme', () => {
    entries(props.theme).forEach(([key, value]) => {
      expect(get[key](props)).toEqual(value);
    });
  });

  describe('computed', () => {
    describe('fg', () => {
      it('returns the fg prop when it is set', () => {
        props.theme.fg = Math.random();
        expect(get.fg(props)).toEqual(props.theme.fg);
      });

      it('returns the darkGray prop when the fg prop is not set', () => {
        expect(get.fg(props)).toEqual(props.theme.darkGray);
      });
    });

    describe('bg', () => {
      it('returns the bg prop when it is set', () => {
        props.theme.bg = Math.random();
        expect(get.bg(props)).toEqual(props.theme.bg);
      });

      it('returns the white prop when the bg prop is not set', () => {
        expect(get.bg(props)).toEqual(props.theme.white);
      });
    });

    describe('boxShadow', () => {
      const shadow = Math.random().toString();

      beforeEach(() => {
        get.shadow = jest.fn().mockReturnValue(shadow);
      });

      it('gets the shadow property', () => {
        get.boxShadow(props);
        expect(get.shadow.mock.calls.length).toBe(1);
        expect(get.shadow.mock.calls[0][0]).toEqual(props);
      });

      it('returns a composed shadow', () => {
        expect(get.boxShadow(props).match(new RegExp(shadow, 'g')).length).toBe(3);
      });
    });
  });
});
