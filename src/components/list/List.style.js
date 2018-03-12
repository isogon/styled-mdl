import styled, { css } from 'styled-components';

import { typoSubhead, typoCaption, typoBody1 } from '../../mixins';
import { getters as g } from '../../util';

export const List = styled.ul`
  display: block;
  padding: $list-border 0;
  list-style: none;
  min-width: 300px;
  width: ${({ width }) => width};
`;

export const LiPrimary = styled.span`
  order: 0;
  flex-grow: 2;
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const LiSecondary = styled.span`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-left: ${g.listMinPadding}px;
`;

export const LiAction = styled.span``;
export const LiInfo = styled.span`
  ${typoCaption()}
  color: ${g.listSupportingTextTextColor};
`;
export const LiSubTitle = styled.span`
  padding: 0 0 0 ${g.listMinPadding}px;
`;

export const LiIcon = styled.i`
  height: ${g.listIconSize}px;
  width: ${g.listIconSize}px;
  font-size: ${g.listIconSize}px;
  box-sizing: border-box;
  color: ${g.listIconColor};
  margin-right: ${({ theme }) => theme.listIconTextLeftDistance - theme.listIconSize - theme.listMinPadding}px;
`;

export const LiAvatar = styled.span`
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
`;

export const LiTitle = styled.span`
  font-size: 16px;
`;

export const LiTextBody = styled.div`
  ${typoBody1()}
  line-height: 18px;
  height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
  color: ${g.listSupportingTextTextColor};
  display: block;
  padding: 0;
`;

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
    ${LiPrimary} {
      line-height: 20px;
      display: block;
    }
    ${LiIcon} {
      float: left;
    }
    ${LiAvatar} {
      float: left;
    }
  `}
  ${({ twoLine }) => twoLine && css`
    height: ${g.listTwoLineHeight}px;
    ${LiPrimary} {
      height: ${({ theme }) => theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
    ${LiSecondary} {
      height: ${({ theme }) => theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
    ${LiSubTitle} {
      ${typoBody1()}
      line-height: 18px;
      color: ${g.listSupportingTextTextColor};
      display: block;
      padding: 0;
    }
    ${LiIcon} {
      margin-top: ${({ theme }) => (theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding - theme.listIconSize) / 2}px;
    }
  `}
  ${({ threeLine }) => threeLine && css`
    height: ${g.listThreeLineHeight}px;
    ${LiPrimary} {
      height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
    ${LiSecondary} {
      height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    }
  `}
`;
