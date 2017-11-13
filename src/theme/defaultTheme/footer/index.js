import { compose } from 'recompose';
import { multiply } from 'lodash';

import { ref } from '../helpers';

export default {
  /* megaFooter */
  minPadding: 16,
  paddingSides: 40,
  headingFontSize: 14,
  btnSize: 36,
  headingLineHeight: compose(multiply(1.7), ref('footer.headingFontSize')),

  /* miniFooter */
  mini: {
    padding: 16,
    headingFontSize: 24,
    btnSize: 36,
    headingLineHeight: compose(
      multiply(1.5),
      ref('footer.mini.headingFontSize'),
    ),
  },
};
