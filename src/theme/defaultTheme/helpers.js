import { transparentize } from 'polished';

import { prop as p, cond, T, always, compose, isUndefined } from 'lodash/fp';

const themePath = p('theme');
const colorPath = p('theme.colors');

export const ref = (path) => compose(p(path), themePath);
export const color = (path, alpha) =>
  cond([
    [always(isUndefined(alpha)), compose(p(path), colorPath)],
    [T, compose(transparentize(alpha), p(path), colorPath)],
  ]);

export const colorFromProp = (prop, fallback = always('none')) =>
  cond([
    [
      p(prop),
      (props) => {
        const [base, value = 500] = props[prop].split('|');
        return colorPath(props)[base][value];
      },
    ],
    [T, fallback],
  ]);
