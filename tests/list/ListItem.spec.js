import ListItem from 'list/ListItem';
import { ListItemBase } from 'list/List.style';

const render = shallowComponent(ListItem, {}, 'Hello World');

describe('<ListItem />', () => {
  let listItem;

  beforeEach(() => {
    listItem = render();
  });

  it('renders a ListItemBase', () => {
    expect(listItem.find(ListItemBase)).toBePresent();
  });

  it('it has no className by default', () => {
    expect(listItem.find(ListItemBase)).not.toHaveProp('className');
  });

  it('it has className: "twoLine" when [prop] twoLine is true', () => {
    listItem.setProps({ twoLine: true });
    expect(listItem.find(ListItemBase)).toHaveProp('className', 'twoLine');
  });

  it('it has className: "threeLine" when [prop] threeLine is true', () => {
    listItem.setProps({ threeLine: true });
    expect(listItem.find(ListItemBase)).toHaveProp('className', 'threeLine');
  });
});
