import Badge, { BadgeBase } from '../../src/components/badges/Badge';

const render = shallowComponent(Badge, { text: 'foo' }, 'Hello World');

describe('<Badge />', () => {
  let badge;

  beforeEach(() => {
    badge = render().until(BadgeBase);
  });

  it('has the right displayName', () => {
    expect(Badge.displayName).toEqual('Badge');
  });

  it('is deeply extendable', () => {
    expect(typeof Badge.extend).toEqual('function');
    expect(typeof Badge.extend``.extend).toEqual('function');
  });

  it('renders a BadgeWrap with className', () => {
    expect(badge.find('BadgeWrap')).toBePresent();
  });

  it('renders a BadgeText with [prop] text', () => {
    expect(badge.find('BadgeText')).toBePresent();
    expect(badge.find('BadgeText')).toHaveInnerText('foo');
  });

  it('renders its children', () => {
    expect(
      badge
        .find('BadgeWrap')
        .children()
        .at(0)
        .text(),
    ).toEqual('Hello World');
  });
});
