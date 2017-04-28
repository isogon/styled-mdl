import Badge from 'badges/Badge';
import { BadgeWrap, BadgeText } from 'badges/Badge.style';

const render = shallowComponent(Badge, { text: 'foo' }, 'Hello World');

describe('<Badge />', () => {
  let badge;

  beforeEach(() => {
    badge = render();
  });

  it('renders a BadgeWrap', () => {
    expect(badge.find(BadgeWrap)).toBePresent();
  });

  it('renders a BadgeText with [prop] text', () => {
    expect(badge.find(BadgeText)).toBePresent();
    expect(badge.find(BadgeText)).toHaveInnerText('foo');
  });

  it('renders its children', () => {
    expect(badge.find(BadgeWrap).children().at(0).text()).toEqual(
      'Hello World',
    );
  });

  it('defaults to [prop] background to true', () => {
    expect(badge.find(BadgeWrap)).toHaveProp('background', true);
    expect(badge.find(BadgeText)).toHaveProp('background', true);
  });
});
