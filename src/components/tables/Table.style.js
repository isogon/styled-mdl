import styled, { css } from 'styled-components'

import { getters as g } from '../../util'
import { Icon } from '../icons'
import { materialAnimationDefault, typoBody2 } from '../../mixins'

export const Table = styled.table`
  position: relative;
  border: ${g.dataTableDividers};
  border-collapse: collapse;
  white-space: nowrap;
  font-size: ${g.dataTableFontSize}px;
  background-color: #fff;
`

export const TableHeader = styled.thead`
  padding-bottom: 3px;

`

export const TableBody = styled.tbody`
  tr:hover {
    background-color: ${g.dataTableHoverColor};
  }
`

export const Row = styled.tr`
  position: relative;
  height: ${g.dataTableRowHeight}px;
  ${materialAnimationDefault('0.28s')};
  transition-property: background-color;
  ${({ isSelected }) => isSelected && css`
    background-color: ${g.dataTableSelectionColor};
  `}
`

const CellBase = styled.td`
  padding: 0 ${g.dataTableColumnPadding}px 12px ${g.dataTableColumnPadding}px;
  text-align: right;

  &:first-of-type {
    padding-left: 24px;
  }

  &:last-of-type {
    padding-right: 24px;
  }

  ${({ nonNumeric }) => nonNumeric && css`
    text-align: left;
  `}
`

export const Cell = CellBase.extend`
  position: relative;
  vertical-align: middle;
  height: ${g.dataTableRowHeight}px;
  border-top: ${g.dataTableDividers};
  border-bottom: ${g.dataTableDividers};
  padding-top: ${g.dataTableCellTop}px;
  box-sizing: border-box;
`

export const HeaderCell = CellBase.withComponent('th').extend`
  position: relative;
  vertical-align: bottom;
  text-overflow: ellipsis;
  ${typoBody2()}
  height: ${g.dataTableRowHeight}px;
  font-size: ${g.dataTableHeaderFontSize}px;
  color: ${g.dataTableHeaderColor};
  padding-bottom: 8px;
  box-sizing: border-box;
`

export const TableIcon = Icon.extend`
  font-size: ${g.dataTableHeaderSortIconSize}px;
  margin-right: 5px;
  vertical-align: bottom;
`
