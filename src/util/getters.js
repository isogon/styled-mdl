import { defaultTheme } from '../theme';

const getters = Object.assign(...Object.keys(defaultTheme).map((key) => ({
  [key]: ({ theme }) => theme[key],
})));

getters.boxShadow = (p) => {
  const shadow = getters.shadow(p);
  return `0 2px 2px 0 ${shadow}, 0 3px 1px -2px ${shadow}, 0 1px 5px 0 ${shadow}`;
};

getters.fg = (p) => p.theme.fg || getters.darkGray(p);

getters.bg = (p) => p.theme.bg || getters.white(p);

export default getters;
