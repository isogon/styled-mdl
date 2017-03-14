import { util } from 'material-components';

const { px } = util;

describe('px', () => {
  it('should append px', () => {
    expect(px(3)).toEqual('3px');
    expect(px(4)).toEqual('4px');
  });
});
