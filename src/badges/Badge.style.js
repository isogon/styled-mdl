import styled, { css } from 'styled-components';
import { getters as g } from '../util';

export const BadgeWrapStyle = css`
  position: relative;
  white-space: nowrap;
  display: inline-block;
  margin-right: ${({ theme }) => theme.badgeSize + theme.badgePadding}px;
  ${({ overlap }) => overlap && css`
    margin-right: ${({ theme }) => theme.badgeSize - theme.badgeOverlap}px;
  `}
  ${({ forButton }) => forButton && css`
    margin-right: ${({ theme }) => theme.badgeSize - 14}px;
  `}
`;

export const BadgeText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: ${({ theme }) => -(theme.badgeSize / 2)}px;
  right: ${({ theme }) => -(theme.badgeSize + theme.badgePadding)}px;
  font-family: ${g.preferredFont};
  font-weight: 600;
  font-size: ${g.badgeFontSize}px;
  width: ${g.badgeSize}px;
  height: ${g.badgeSize}px;
  border-radius: 50%;
  background: ${g.badgeBackground};
  color: ${g.badgeColor};
  ${({ forButton }) => forButton && css`
    top: -10px;
    right: -7px;
  `}
  ${({ background }) => !background && css`
    color: ${g.badgeColorInverse};
    background: ${g.badgeBackgroundInverse};
    box-shadow: 0 0 1px gray;
  `}
  ${({ overlap }) => overlap && css`
    right: ${({ theme }) => -(theme.badgeSize - theme.badgeOverlap)}px;
  `}
`;
