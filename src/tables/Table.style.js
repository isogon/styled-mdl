import { compose, setDisplayName } from 'recompose';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { Icon } from '../icons';
import { getters } from '../util';
import { materialAnimationDefault, typoBody2 } from '../mixins';

const { dataTable } = getters;

export const Table = setDisplayName('Table')(
  styled.table`
    position: relative;
    border: ${dataTable.dividers};
    border-collapse: collapse;
    white-space: nowrap;
    font-size: ${dataTable.fontSize}px;
    background-color: #fff;
  `);

export const TableHeader = setDisplayName('TableHeader')(
  styled.thead`
    padding-bottom: 3px;
  `);

export const TableBody = setDisplayName('TableBody')(
  styled.tbody``);

export const Cell = setDisplayName('Cell')(
  styled.td`
    position: relative;
    padding: ${dataTable.cellTop}px ${dataTable.columnPadding}px 12px ${dataTable.columnPadding}px;
    border-top: ${dataTable.dividers};
    border-bottom: ${dataTable.dividers};
    text-align: ${ifProp('nonNumeric', 'left', 'right')};
    vertical-align: middle;
    height: ${dataTable.rowHeight}px;
    box-sizing: border-box;
    &:first-of-type { padding-left: 24px; }
    &:last-of-type { padding-right: 24px; }
  `);

export const Row = setDisplayName('Row')(
  styled.tr`
    position: relative;
    height: ${dataTable.rowHeight}px;
    ${materialAnimationDefault('0.28s')};
    transition-property: background-color;
    ${ifProp('isSelected', css`
      ${Cell} {
        background-color: ${dataTable.selectionColor};
        border-color: ${compose(transparentize(-0.05), dataTable.dividerColor)};
      }
    `)}
  `);

export const HeaderCell = setDisplayName('HeaderCell')(
  Cell.withComponent('th').extend`
    padding-top: 0;
    padding-bottom: 8px;
    ${typoBody2()}
    text-overflow: ellipsis;
    vertical-align: bottom;
    border-top: 0;
    border-bottom: 0;
    font-size: ${dataTable.headerFontSize}px;
    color: ${ifProp('sorted', dataTable.headerSortedColor, dataTable.headerColor)};
  `);

export const TableIcon = setDisplayName('TableIcon')(
  Icon.extend`
    font-size: ${dataTable.headerSortIconSize}px;
    margin-right: 5px;
    vertical-align: bottom;
  `);
