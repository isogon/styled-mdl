import { compose } from 'recompose';
import { transparentize } from 'polished';

import { ref } from '../helpers';

export default {
  fontSize: 12,
  size: 22,
  padding: 2,
  overlap: 12,
  color: ref('colors.accentContrast'),
  colorInverse: ref('colors.accent'),
  background: ref('colors.accent'),
  backgroundInverse: compose(transparentize(0.8), ref('colors.accentContrast')),
};
