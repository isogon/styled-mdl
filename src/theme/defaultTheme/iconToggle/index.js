import { compose } from 'recompose';
import { transparentize } from 'polished';

import { ref } from '../helpers';

export default {
  toggleSize: 32,
  toggleFontSize: 24,
  toggleRippleSize: 36,
  iconToggleColor: ref('colors.grey.700'),
  iconToggleDisabledColor: compose(transparentize(0.74), ref('colors.black')),
};
