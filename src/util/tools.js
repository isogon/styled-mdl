import styled from 'styled-components';
import { any, isFunction, prop, omit, pickBy } from 'lodash/fp';
import { compose, mapProps, withProps } from 'recompose';
import validAttr from 'styled-components/lib/utils/validAttr';

const hasAnyProp = compose(any, prop);

export const ifAnyProp = (testProps, pass, fail) => (props) => {
  if (hasAnyProp(testProps)) {
    return isFunction(pass) ? pass(props) : pass;
  }

  return isFunction(fail) ? fail(props) : fail;
};

export const withStyle = (styles) => (c) =>
  styled(c)`
    ${styles};
  `;
export const omitProps = compose(mapProps, omit);
export const getDomProps = withProps((props) => ({
  domProps: pickBy((v, k) => validAttr(k))(props),
}));
