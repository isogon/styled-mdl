import styled, { css } from 'styled-components'

import { typoSubhead, typoCaption, typoBody1 } from '../../mixins'
import { getters as g } from '../../util'

export const List = styled.ul`
  display: block;
  padding: $list-border 0;
  list-style: none;
  min-width: 300px;
  width: ${({ width }) => width};
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
  margin-left: ${g.listMinPadding}px;
`

export const ListAction = styled.span``
export const ListInfo = styled.span`
  ${typoCaption()}
  color: ${g.listSupportingTextTextColor};
`
export const ListSubTitle = styled.span`
  padding: 0 0 0 ${g.listMinPadding}px;
`

export const ListIcon = styled.i`
  height: ${g.listIconSize}px;
  width: ${g.listIconSize}px;
  font-size: ${g.listIconSize}px;
  box-sizing: border-box;
  color: ${g.listIconColor};
  margin-right: ${({ theme }) => theme.listIconTextLeftDistance - theme.listIconSize - theme.listMinPadding}px;
`

export const ListAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${g.listAvatarSize}px;
  width: ${g.listAvatarSize}px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${g.listIconColor};
  font-size: ${g.listAvatarSize}px;
  ${({ src }) => src && css`
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `}
  color: ${g.listAvatarColor};
  margin-right: ${({ theme }) => theme.listIconTextLeftDistance - theme.listAvatarSize - theme.listMinPadding}px;
`

export const ListTitle = styled.span`
  font-size: 16px;
`

export const ListTextBody = styled.div`
  ${typoBody1()}
  line-height: 18px;
  height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
  color: ${g.listSupportingTextTextColor};
  display: block;
  padding: 0;
`

export const ListItem = styled.li`
  ${typoSubhead()}
  line-height: 1;
  display: flex;
  min-height: ${g.listMinHeight}px;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: ${g.listMinPadding}px;
  cursor: default;
  color: ${g.listMainTextTextColor};
  overflow: hidden;
  ${({ twoLine, threeLine }) => (twoLine || threeLine) && css`
    ${ListPrimary} {
      line-height: 20px;
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
    height: ${g.listTwoLineHeight}px;
    ${ListPrimary} {
      height: ${({ theme }) => theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
    ${ListSecondary} {
      height: ${({ theme }) => theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
    ${ListSubTitle} {
      ${typoBody1()}
      line-height: 18px;
      color: ${g.listSupportingTextTextColor};
      display: block;
      padding: 0;
    }
    ${ListIcon} {
      margin-top: ${({ theme }) => (theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding - theme.listIconSize) / 2}px;
    }
  `}
  ${({ threeLine }) => threeLine && css`
    height: ${g.listThreeLineHeight}px;
    ${ListPrimary} {
      height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
    ${ListSecondary} {
      height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
  `}
`
