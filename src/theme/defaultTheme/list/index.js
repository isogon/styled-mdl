import { compose } from 'recompose';
import { transparentize } from 'polished';

import { ref } from '../helpers';

export default {
  border: 8,
  minHeight: 48,
  minPadding: 16,
  bottomPadding: 20,
  avatarTextLeftDistance: 72,
  iconTextLeftDistance: 72,

  avatarSize: 40,
  iconSize: 24,

  twoLineHeight: 72,
  threeLineHeight: 88,
  mainTextTextColor: compose(transparentize(0.13), ref('colors.black')),
  supportingTextTextColor: compose(transparentize(0.45), ref('colors.black')),
  iconColor: ref('colors.grey.600'),
  avatarColor: ref('colors.white'),
};
