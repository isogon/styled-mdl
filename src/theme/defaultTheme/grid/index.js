import { ref } from '../helpers';

export default {
  cellDefaultColumns: ref('grid.phoneColumns'),
  maxColumns: ref('grid.desktopColumns'),

  desktopBreakpoint: 40,
  desktopColumns: 12,
  desktopGutter: 16,
  desktopMargin: 16,

  tabletBreakpoint: 80,
  tabletColumn: 8,
  tabletGutter: ref('grid.desktopGutter'),
  tabletMargin: ref('grid.desktopMargin'),

  phoneColumn: 4,
  phoneGutter: ref('grid.desktopGutter'),
  phoneMargin: ref('grid.desktopMargin'),
};
