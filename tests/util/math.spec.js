import { util } from 'material-components';

const { half, double, diagonalLength } = util;

describe('half', () => {
  it('should divide by 2 and round to the nearest int', () => {
    expect(half(3)).toEqual(2);
    expect(half(4)).toEqual(2);
  });
});

describe('double', () => {
  it('should double the passed number', () => {
    expect(double(2)).toEqual(4);
    expect(double(2.5)).toEqual(5);
  });
});

describe('diagonalLength', () => {
  it('should get the diagonal length', () => {
    expect(diagonalLength(3, 4)).toEqual(5);
    expect(diagonalLength(12, 35)).toEqual(37);
  });
});
