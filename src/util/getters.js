import { isObject, isFunction, compose, get } from 'lodash/fp';
import { mapValues } from 'lodash';
import { defaultTheme } from '../theme';
import { rgb, rgba } from './colors';

const createGetters = (theme) => (getter) =>
  mapValues(theme, (value, key) => {
    if (isFunction(value)) {
      return value;
    }
    if (isObject(value)) {
      return createGetters(value)(compose(get(key), getter));
    }
    return compose(get(key), getter);
  });

const getters = createGetters(defaultTheme)(get('theme'));

getters.fg = (p) => p.theme.fg || p.theme.textColorPrimary;
getters.bg = (p) => p.theme.bg || `rgb(${p.theme.white})`;

getters.rgb = (base, value) => (p) => rgb(p.theme[base][value]);
getters.rgba = (base, value, alpha) => (p) => rgba(p.theme[base][value], alpha);

export default getters;
