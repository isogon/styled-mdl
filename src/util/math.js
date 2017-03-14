import { round } from 'lodash';

export const half = (n) => round(n / 2);
export const double = (n) => n * 2;
export const diagonalLength = (width, height) => Math.sqrt((width * width) + (height * height));
