import * as defaults from './defaults';
import createThemer from '../createThemer';

export default createThemer(defaults, (theme) => ({
  dataTableDividers: `1px solid ${theme.dataTableDividerColor}`,
  dataTableColumnPadding: theme.dataTableColumnSpacing / 2,
  dataTableCellTop: theme.dataTableCardPadding / 2,
}));
