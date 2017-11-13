import { compose } from 'recompose';
import { transparentize } from 'polished';

import { ref } from '../helpers';

export default {
  expandDuration: 0.3,
  fadeDuration: 0.2,
  itemTextColor: compose(transparentize(0.13), ref('colors.black')),
  itemOutlineColor: ref('colors.grey.400'),
  itemHoverBgColor: ref('colors.grey.200'),
  itemFocusBgColor: ref('colors.grey.200'),
  itemActiveBgColor: ref('colors.grey.300'),
  itemDividerColor: compose(transparentize(0.88), ref('colors.black')),
  disabledItemTextColor: ref('colors.grey.400'),
  dropdownBgColor: ref('colors.white'),
};
