import { ifProp } from 'styled-tools'
import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import {
  configurable,
  typoBody1,
  typoCaption,
  typoSubhead,
} from '../../mixins'
import { themeProps } from '../..'
import Icon from '../Icon'

export const LIST_BORDER = 0.5
export const LIST_MIN_HEIGHT = 3
export const LIST_MIN_PADDING = 1
export const LIST_BOTTOM_PADDING = 1.25
export const LIST_AVATAR_TEXT_LEFT_DISTANCE = 4.5
export const LIST_ICON_TEXT_LEFT_DISTANCE = 4.5
export const LIST_AVATAR_SIZE = 2.5
export const LIST_ICON_SIZE = 1.5
export const LIST_TWO_LINE_HEIGHT = 4.5
export const LIST_THREE_LINE_HEIGHT = 5.5

export const List = styled.ul`
  display: block;
  padding: ${LIST_BORDER}rem 0;
  list-style: none;
  min-width: 18.75rem;
  ${configurable('width', '18.75rem')};
`

export const ListPrimary = styled.span`
  order: 0;
  flex-grow: 2;
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

export const ListSecondary = styled.span`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-left: ${LIST_MIN_PADDING}rem;
`

export const ListAction = styled.span``
export const ListInfo = styled.span`
  ${typoCaption()}
  color: ${themeProps.textSecondaryOnLight};
`
export const ListSubTitle = styled.span`
  padding: 0 0 0 ${LIST_MIN_PADDING}rem;
`

export const ListIcon = styled.i`
  height: ${LIST_ICON_SIZE}rem;
  width: ${LIST_ICON_SIZE}rem;
  font-size: ${LIST_ICON_SIZE}rem;
  box-sizing: border-box;
  color: ${themeProps.textSecondaryOnLight};
  margin-right: ${LIST_ICON_TEXT_LEFT_DISTANCE - LIST_ICON_SIZE - LIST_MIN_PADDING}rem;
`

export const ListAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${LIST_AVATAR_SIZE}rem;
  width: ${LIST_AVATAR_SIZE}rem;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${themeProps.textSecondaryOnLight};
  font-size: ${LIST_AVATAR_SIZE}rem;
  ${Icon} {
    font-size: ${LIST_AVATAR_SIZE}rem;
  }
  ${ifProp('src', css`
    background-image: url(${get('src')});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `)}
  color: ${themeProps.textPrimaryOnDark};
  margin-right: ${LIST_ICON_TEXT_LEFT_DISTANCE - LIST_AVATAR_SIZE - LIST_MIN_PADDING}rem;
`

export const ListTitle = styled.span`
  font-size: 1rem;
`

export const ListTextBody = styled.div`
  ${typoBody1()}
  line-height: 1.125rem;
  height: ${LIST_THREE_LINE_HEIGHT - LIST_MIN_PADDING - LIST_BOTTOM_PADDING}rem;
  color: ${themeProps.textSecondaryOnLight};
  display: block;
  padding: 0;
`

export const ListItem = styled.li`
  ${typoSubhead()}
  line-height: 1;
  display: flex;
  min-height: ${LIST_MIN_HEIGHT}rem;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: ${LIST_MIN_PADDING}rem;
  cursor: default;
  color: ${themeProps.textPrimaryOnLight};
  overflow: hidden;
  ${({ twoLine, threeLine }) => (twoLine || threeLine) && css`
    ${ListPrimary} {
      line-height: 1.25rem;
      display: block;
    }
    ${ListIcon} {
      float: left;
    }
    ${ListAvatar} {
      float: left;
    }
  `}
  ${({ twoLine }) => twoLine && css`
    height: ${LIST_TWO_LINE_HEIGHT}rem;
    ${ListPrimary} {
      height: ${LIST_TWO_LINE_HEIGHT - LIST_MIN_PADDING - LIST_BOTTOM_PADDING}rem;
    }
    ${ListSecondary} {
      height: ${LIST_TWO_LINE_HEIGHT - LIST_MIN_PADDING - LIST_BOTTOM_PADDING}rem;
    }
    ${ListSubTitle} {
      ${typoBody1()}
      line-height: 1.125rem;
      color: ${themeProps.textSecondaryOnLight};
      display: block;
      padding: 0;
    }
    ${ListIcon} {
      margin-top: ${(LIST_TWO_LINE_HEIGHT - LIST_MIN_PADDING - LIST_BOTTOM_PADDING - LIST_ICON_SIZE) / 2}rem;
    }
  `}
  ${({ threeLine }) => threeLine && css`
    height: ${LIST_THREE_LINE_HEIGHT}rem;
    ${ListPrimary} {
      height: ${LIST_THREE_LINE_HEIGHT - LIST_MIN_PADDING - LIST_BOTTOM_PADDING}rem;
    }
    ${ListSecondary} {
      height: ${LIST_THREE_LINE_HEIGHT - LIST_MIN_PADDING - LIST_BOTTOM_PADDING}rem;
    }
  `}
`
