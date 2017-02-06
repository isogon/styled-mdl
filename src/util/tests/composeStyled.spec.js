import * as styled from 'styled-components';
import { makeModifier, composeStyled } from '../composeStyled';

describe('makeModifier', () => {
  it('returns a function', () => {
    expect(makeModifier()).toEqual(expect.any(Function));
  });

  describe('returned function', () => {
    let getModifier;
    const prop = Math.random().toString();
    const modifier = Math.random();

    beforeEach(() => {
      getModifier = makeModifier(prop, modifier);
    });

    it('returns the modifier when the prop passed to makeModifier is truthy', () => {
      expect(getModifier({ [prop]: true })).toEqual(modifier);
    });
    it('returns `null` when the prop passed to makeModifier is falsey', () => {
      expect(getModifier({ [prop]: false })).toBe(null);
    });
  });
});

describe('composeStyled', () => {
  const element = 'div';
  const base = Math.random();
  const mod1 = Math.random();
  const mod2 = Math.random();
  const styledResult = Math.random();
  const mockStyledClosure = jest.fn().mockReturnValue(styledResult);
  let result;

  beforeEach(() => {
    styled.default = jest.fn().mockReturnValue(mockStyledClosure);
    styled.css = jest.fn().mockImplementation((strings, aggr, curr) => (aggr + curr));
    result = composeStyled(element, base, mod1, mod2);
  });

  it('calls styled with the passed element', () => {
    expect(styled.default.mock.calls.length).toBe(1);
    expect(styled.default.mock.calls[0][0]).toEqual(element);
  });

  it('composes the styles from all base and mods', () => {
    // First iteration
    expect(styled.css.mock.calls[0][1]).toEqual(base);
    expect(styled.css.mock.calls[0][2]).toEqual(mod1);

    // Second iteration
    expect(styled.css.mock.calls[1][1]).toEqual(base + mod1);
    expect(styled.css.mock.calls[1][2]).toEqual(mod2);

    // Finally
    expect(mockStyledClosure.mock.calls[0][1]).toEqual(base + mod1 + mod2);
  });

  it('returns the result', () => {
    expect(result).toEqual(styledResult);
  });
});
