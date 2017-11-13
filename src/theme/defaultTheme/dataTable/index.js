import { compose } from 'recompose';

import { half } from '../../../util/math';
import { ref } from '../helpers';

export default {
  fontSize: 13,
  headerFontSize: 12,
  headerSortIconSize: 16,

  headerColor: 'rgba(0, 0, 0, 0.54)',
  headerSortedColor: 'rgba(0, 0, 0, 0.87)',
  headerSortedIconHoverColor: 'rgba(0, 0, 0, 0.26)',
  dividerColor: 'rgba(0, 0, 0, 0.12)',

  hoverColor: 'rgba(0, 0, 0, 0.06)',
  selectionColor: 'rgba(0, 0, 0, 0.1)',

  rowHeight: 48,
  lastRowHeight: 56,
  headerHeight: 56,

  columnSpacing: 36,

  cardHeaderHeight: 64,
  cardTitleTop: 20,
  cardPadding: 24,
  buttonPaddingRight: 16,

  dividers: compose((c) => `1px solid ${c}`, ref('dataTable.dividerColor')),
  columnPadding: compose(half, ref('dataTable.columnSpacing')),
  cellTop: compose(half, ref('dataTable.cardPadding')),
};
