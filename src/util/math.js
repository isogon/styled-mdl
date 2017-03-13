import { round } from 'lodash';

export const half = (n) => round(n / 2);
export const double = (n) => n * 2;
export const rectDiagonalLength = ({ width, height }) => Math.sqrt((width * width) + (height * height));
export const getRect = (elem) => elem.getBoundingClientRect();
