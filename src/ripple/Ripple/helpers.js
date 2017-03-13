import { round } from 'lodash';
import { getRect, half, double, rectDiagonalLength, px } from '../../util';

function isKeyboardClick({ clientX, clientY }) {
  return clientX === 0 && clientY === 0;
}

function getX(e) {
  return e.clientX !== undefined
    ? e.clientX
    : e.touches[0].clientX;
}

function getY(e) {
  return e.clientY !== undefined
    ? e.clientY
    : e.touches[0].clientY;
}

export function getRippleSize(e) {
  return px(double(rectDiagonalLength(getRect(e))) + 2);
}

export function getRippleCoords(e) {
  const { height, width, left, top } = getRect(e.currentTarget);
  const coords = isKeyboardClick(e)
    ? [width, height].map(half)
    : [getX(e) - left, getY(e) - top];

  return coords.map(round).map(px).join(', ');
}
