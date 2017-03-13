import { css } from 'styled-components';

export function dialogWidth(units = 5) {
  if (typeof units !== 'number') {
    throw new Error('THe unit given to a dialog-width should be a number');
  }
  return css`width: ${units * 56}px;`;
}
