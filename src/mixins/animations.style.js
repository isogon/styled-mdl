import { css } from 'styled-components';
import { getters as g } from '../util';

export function materialAnimationFastOutSlowIn(duration = '0.2s') {
  return css`
    transition-duration: ${duration};
    transition-timing-function: ${g.animation.fastOutSlowIn};
  `;
}

export function materialAnimationLinearOutSlowIn(duration = '0.2s') {
  return css`
    transition-duration: ${duration};
    transition-timing-function: ${g.animation.linearOutSlowIn};
  `;
}

export function materialAnimationFastOutLinearIn(duration = '0.2s') {
  return css`
    transition-duration: ${duration};
    transition-timing-function: ${g.animation.fastOutLinearIn};
  `;
}

export function materialAnimationDefault(duration = '0.2s') {
  return css`
    transition-duration: ${duration};
    transition-timing-function: ${g.animation.default};
  `;
}
