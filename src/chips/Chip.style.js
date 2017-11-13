import { compose, setDisplayName } from 'recompose';
import { ifProp, prop } from 'styled-tools';
import styled, { css } from 'styled-components';

import { colorFromProp } from '../theme/defaultTheme/helpers';
import { getters, half } from '../util';
import { shadow2dp } from '../mixins';

const { chip, colors } = getters;

export const ChipStyle = setDisplayName('ChipStyle')(styled.span`
  height: ${chip.height}px;
  font-family: ${getters.preferredFont};
  line-height: ${chip.height}px;
  padding: 0 12px;
  border: 0;
  border-radius: ${compose(half, chip.height)}px;
  background-color: ${chip.bgColor};
  display: inline-block;
  color: ${colors.textPrimary};
  margin: 2px 0;
  font-size: 0;
  white-space: nowrap;
  &:focus {
    outline: 0;
    ${shadow2dp()}
  }
  &:active {
    background-color: ${chip.bgActiveColor};
  }
  ${ifProp('deletable', css`
    padding-right: 4px;
  `)}
  ${ifProp('contact', css`
    padding-left: 0;
  `)}
`);

export const ButtonChipStyle = ChipStyle.withComponent('button');


export const ChipText = setDisplayName('ChipText')(styled.span`
  font-size: ${chip.fontSize}px;
  vertical-align: middle;
  display: inline-block;
`);

export const ChipAction = setDisplayName('ChipAction')(styled.button`
  height: 24px;
  width: 24px;
  font-size: 24px;
  background: transparent;
  opacity: 0.54;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  padding: 0;
  margin: 0 0 0 4px;
  text-decoration: none;
  color: ${colors.textPrimary};
  border: none;
  outline: none;
  overflow: hidden;
`);

export const ChipContactImg = setDisplayName('ChipContactImg')(styled.img`
  height: ${chip.height}px;
  width: ${chip.height}px;
  border-radius: ${compose(half, chip.height)}px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  overflow: hidden;
  text-align: center;
  font-size: 18px;
  line-height: 32px;
  background-color: ${colorFromProp('color', colors.primary)};
  color: ${prop('textColor', 'white')}
`);

export const ChipContactSpan = setDisplayName('ChipContactSpan')(
  ChipContactImg.withComponent('span')
);
