import entries from 'lodash/entries';
import { util, defaultTheme } from 'material-components';

const { getters } = util;

describe('getters', () => {
  let props;
  let get;

  beforeEach(() => {
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

      it('returns the textColorPrimary prop when the fg prop is not set', () => {
        expect(get.fg(props)).toEqual(props.theme.textColorPrimary);
      });
    });

    describe('bg', () => {
      it('returns the bg prop when it is set', () => {
        props.theme.bg = Math.random();
        expect(get.bg(props)).toEqual(props.theme.bg);
      });

      it('returns the white prop when the bg prop is not set', () => {
        expect(get.bg(props)).toEqual(`rgb(${props.theme.white})`);
      });
    });

    describe('rgb', () => {
      it('returns the rgb wrapped value for the correct color', () => {
        expect(
          get.rgb('grey', 500)(props)
        ).toEqual(`rgb(${props.theme.grey[500]})`);
      });
      it('returns the rgba wrapped value for the correct color and alpha', () => {
        const alpha = Math.random();
        expect(
          get.rgba('grey', 500, alpha)(props)
        ).toEqual(`rgba(${props.theme.grey[500]},${alpha})`);
      });
    });
  });
});
