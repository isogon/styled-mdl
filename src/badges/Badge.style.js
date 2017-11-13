import { add, divide, subtract, cond, T, always, compose } from 'lodash/fp';
import { call, prop as p, ifProp } from 'styled-tools';
import { setDisplayName } from 'recompose';
import styled from 'styled-components';

import { getters } from '../util';

const { badge } = getters;
const negate = (n) => -n;
const overlap = p('overlap');
const forButton = p('forButton');
const preferredFont = p('theme.preferredFont');

export const BadgeWrap = setDisplayName('BadgeWrap')(styled.div`
  position: relative;
  white-space: nowrap;
  display: inline-block;
  margin-right: ${cond([
    [overlap, call(subtract, badge.size, badge.overlap)],
    [forButton, call(subtract, badge.size, always(14))],
    [T, call(add, badge.size, badge.padding)],
  ])}px;
`);

export const BadgeText = setDisplayName('BadgeText')(styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: ${ifProp('forButton', -10, call(divide, badge.size, always(-2)))}px;
  right: ${cond([
    [forButton, always(-10)],
    [overlap, call(compose(negate, subtract), badge.size, badge.overlap)],
    [T, call(compose(negate, add), badge.size, badge.padding)],
  ])}px;
  font-family: ${preferredFont};
  font-weight: 600;
  font-size: ${badge.fontSize}px;
  width: ${badge.size}px;
  height: ${badge.size}px;
  border-radius: 50%;
  color: ${ifProp('background', badge.color, badge.colorInverse)};
  background: ${ifProp('background', badge.background, badge.backgroundInverse)};
  box-shadow: ${ifProp('background', 'none', '0 0 1px gray')};
`);
