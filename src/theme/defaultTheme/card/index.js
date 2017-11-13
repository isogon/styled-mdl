import { compose } from 'recompose';
import { transparentize } from 'polished';

import { ref } from '../helpers';

export default {
  width: 330,
  height: 200,
  fontSize: 16,
  titleFontSize: 24,
  subtitleFontSize: 14,
  horizontalPadding: 16,
  verticalPadding: 16,
  borderColor: compose(transparentize(0.9), ref('colors.black')),

  titlePerspectiveOriginX: 165,
  titlePerspectiveOriginY: 56,

  titleTransformOriginX: 165,
  titleTransformOriginY: 56,

  titleTextTransformOriginX: 149,
  titleTextTransformOriginY: 48,

  supportingTextFontSize: 14,
  supportingTextLineHeight: 18,

  actionsFontSize: 16,

  titleTextFontWeight: 300,
  zIndex: 1,

  /* Cover image */
  coverImageHeight: 186,
  backgroundImageUrl: '',

  backgroundColor: ref('colors.white'),
  textColor: ref('colors.black'),
  supportingTextTextColor: compose(transparentize(0.45), ref('colors.black')),
  subtitleColor: compose(transparentize(0.45), ref('colors.black')),
};
