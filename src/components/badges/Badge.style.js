import { add, divide, subtract, cond, T, always, compose } from 'lodash/fp'
import { call, prop, ifProp } from 'styled-tools'
import { setDisplayName } from 'recompose'
import styled from 'styled-components'

const negate = (n) => -n
const overlap = prop('overlap')
const forButton = prop('forButton')
const badgeSize = prop('theme.badgeSize')
const badgeFontSize = prop('theme.badgeFontSize')
const badgeOverlap = prop('theme.badgeOverlap')
const badgePadding = prop('theme.badgePadding')
const preferredFont = prop('theme.preferredFont')
const badgeBackground = prop('theme.badgeBackground')
const badgeColor = prop('theme.badgeColor')
const badgeColorInverse = prop('theme.badgeColorInverse')
const badgeBackgroundInverse = prop('theme.badgeBackgroundInverse')

export const BadgeWrap = setDisplayName('BadgeWrap')(styled.div`
  position: relative;
  white-space: nowrap;
  display: inline-block;
  margin-right: ${cond([
    [overlap, call(subtract, badgeSize, badgeOverlap)],
    [forButton, call(subtract, badgeSize, always(14))],
    [T, call(add, badgeSize, badgePadding)],
  ])}px;
`)

export const BadgeText = setDisplayName('BadgeText')(styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: ${ifProp('forButton', -10, call(divide, badgeSize, always(-2)))}px;
  right: ${cond([
    [forButton, always(-10)],
    [overlap, call(compose(negate, subtract), badgeSize, badgeOverlap)],
    [T, call(compose(negate, add), badgeSize, badgePadding)],
  ])}px;
  font-family: ${preferredFont};
  font-weight: 600;
  font-size: ${badgeFontSize}px;
  width: ${badgeSize}px;
  height: ${badgeSize}px;
  border-radius: 50%;
  color: ${ifProp('background', badgeColor, badgeColorInverse)};
  background: ${ifProp('background', badgeBackground, badgeBackgroundInverse)};
  box-shadow: ${ifProp('background', 'none', '0 0 1px gray')};
`)
