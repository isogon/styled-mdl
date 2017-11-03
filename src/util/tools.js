import styled from 'styled-components';
import { every, any, isFunction, prop, omit } from 'lodash/fp';
import { compose, mapProps } from 'recompose';


const hasAnyProp = compose(any, prop);
const hasAllProps = compose(every, prop);

export const ifProp = (pred, pass, fail) => (props) => {
  const testProps = Array.isArray(pred) ? pred : [pred];

  if (hasAllProps(testProps)) {
    return isFunction(pass) ? pass(props) : pass;
  }

  return isFunction(fail) ? fail(props) : fail;
};

export const ifAnyProp = (testProps, pass, fail) => (props) => {
  if (hasAnyProp(testProps)) {
    return isFunction(pass) ? pass(props) : pass;
  }

  return isFunction(fail) ? fail(props) : fail;
};


export const withStyle = (styles) => (c) => styled(c)`${styles}`;
export const omitProps = compose(mapProps, omit);
