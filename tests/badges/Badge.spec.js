import { BadgeBase } from 'badges/Badge';
import { BadgeText } from 'badges/Badge.style';

const render = shallowComponent(BadgeBase, { text: 'foo' }, 'Hello World');

describe('<Badge />', () => {
  let badge;

  beforeEach(() => {
    badge = render();
  });

  it('renders a div with className', () => {
    expect(badge.find('div')).toBePresent();
    expect(badge.find('div')).toHaveProp('className');
  });

  it('renders a BadgeText with [prop] text', () => {
    expect(badge.find(BadgeText)).toBePresent();
    expect(badge.find(BadgeText)).toHaveInnerText('foo');
  });

  it('renders its children', () => {
    expect(
      badge
        .find('div')
        .children()
        .at(0)
        .text()
    ).toEqual('Hello World');
  });
});
