import { compose, defaultProps, setDisplayName } from 'recompose'
import styled, { css } from 'styled-components'

import { getters as g } from '../../util'
import { shadow2dp } from '../../mixins'

export const ChipStyle = setDisplayName('ChipStyle')(styled.span`
  height: ${g.chipHeight}px;
  font-family: ${g.preferredFont};
  line-height: ${g.chipHeight}px;
  padding: 0 12px;
  border: 0;
  border-radius: ${({ theme }) => theme.chipHeight / 2}px;
  background-color: ${g.chipBgColor};
  display: inline-block;
  color: ${g.textColorPrimary};
  margin: 2px 0;
  font-size: 0;
  white-space: nowrap;
  &:focus {
    outline: 0;
    ${shadow2dp()}
  }
  &:active {
    background-color: ${g.chipBgActiveColor};
  }
  ${({ deletable }) => deletable && css`
    padding-right: 4px;
  `}
  ${({ contact }) => contact && css`
    padding-left: 0px;
  `}
`)

export const ButtonChipStyle = ChipStyle.withComponent('button')


export const ChipText = setDisplayName('ChipText')(styled.span`
  font-size: ${g.chipFontSize}px;
  vertical-align: middle;
  display: inline-block;
`)

export const ChipAction = compose(
  defaultProps({
    type: 'button',
  }),
  setDisplayName('ChipAction'),
)(styled.button`
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
  color: ${g.textColorPrimary};
  border: none;
  outline: none;
  overflow: hidden;
`)

export const ChipContactImg = setDisplayName('ChipContactImg')(styled.img`
  height: ${g.chipHeight}px;
  width: ${g.chipHeight}px;
  border-radius: ${({ theme }) => theme.chipHeight / 2}px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  overflow: hidden;
  text-align: center;
  font-size: 18px;
  line-height: 32px;
  background-color: ${g.rgbFromProp('color', g.colorPrimary)};
  color: ${({ textColor }) => textColor || '#FFF'};
`)

export const ChipContactSpan = setDisplayName('ChipContactSpan')(
  ChipContactImg.withComponent('span')
)
