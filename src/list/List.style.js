import { ifProp, prop } from 'styled-tools';
import styled, { css } from 'styled-components';

import { getters } from '../util';
import { typoSubhead, typoCaption, typoBody1 } from '../mixins';

const { list } = getters;

export const List = styled.ul`
  display: block;
  padding: $list-border 0;
  list-style: none;
  min-width: 300px;
  width: ${prop('width')};
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
  margin-left: ${list.minPadding}px;
`;

export const LiAction = styled.span``;
export const LiInfo = styled.span`
  ${typoCaption()}
  color: ${list.supportingTextTextColor};
`;
export const LiSubTitle = styled.span`
  padding: 0 0 0 ${list.minPadding}px;
`;

export const LiIcon = styled.i`
  height: ${list.iconSize}px;
  width: ${list.iconSize}px;
  font-size: ${list.iconSize}px;
  box-sizing: border-box;
  color: ${list.iconColor};
  margin-right: ${(p) => list.iconTextLeftDistance(p) - list.iconSize(p) - list.minPadding(p)}px;
`;

export const LiAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${list.avatarSize}px;
  width: ${list.avatarSize}px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${list.iconColor};
  font-size: ${list.avatarSize}px;
  ${ifProp('src', css`
    background-image: url(${prop('src')});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `)}
  color: ${list.avatarColor};
  margin-right: ${(p) => list.iconTextLeftDistance(p) - list.avatarSize(p) - list.minPadding(p)}px;
`;

export const LiTitle = styled.span`
  font-size: 16px;
`;

export const LiTextBody = styled.div`
  ${typoBody1()}
  line-height: 18px;
  height: ${(p) => list.threeLineHeight(p) - list.minPadding(p) - list.bottomPadding(p)}px;
  color: ${list.supportingTextTextColor};
  display: block;
  padding: 0;
`;

export const ListItem = styled.li`
  ${typoSubhead()}
  line-height: 1;
  display: flex;
  min-height: ${list.minHeight}px;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: ${list.minPadding}px;
  cursor: default;
  color: ${list.mainTextTextColor};
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
  ${ifProp('twoLine', css`
    height: ${list.twoLineHeight}px;
    ${LiPrimary} {
      height: ${(p) => list.twoLineHeight(p) - list.minPadding(p) - list.bottomPadding(p)}px;
    }
    ${LiSecondary} {
      height: ${(p) => list.twoLineHeight(p) - list.minPadding(p) - list.bottomPadding(p)}px;
    }
    ${LiSubTitle} {
      ${typoBody1()}
      line-height: 18px;
      color: ${list.supportingTextTextColor};
      display: block;
      padding: 0;
    }
    ${LiIcon} {
      margin-top: ${(p) => (list.twoLineHeight(p) - list.minPadding(p) - list.bottomPadding(p) - list.iconSize(p)) / 2}px;
    }
  `)}
  ${ifProp('threeLine', css`
    height: ${list.threeLineHeight}px;
    ${LiPrimary} {
      height: ${(p) => list.threeLineHeight(p) - list.minPadding(p) - list.bottomPadding(p)}px;
    }
    ${LiSecondary} {
      height: ${(p) => list.threeLineHeight(p) - list.minPadding(p) - list.bottomPadding(p)}px;
    }
  `)}
`;
