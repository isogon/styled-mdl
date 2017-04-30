import LiAvatar from 'list/LiAvatar';
import { ImgAvatar, IconAvatar } from 'list/List.style';

const render = shallowComponent(LiAvatar, {}, 'Hello World');

describe('<LiAvatar />', () => {
  let liAvatar;

  beforeEach(() => {
    liAvatar = render();
  });

  it('renders a ImgAvatar when [prop] src is defined', () => {
    liAvatar.setProps({ src: 'some image src' });
    expect(liAvatar.find(ImgAvatar)).toBePresent();
    expect(liAvatar.find(IconAvatar)).not.toBePresent();
  });

  it('renders a IconAvatar when [prop] src is not defined', () => {
    liAvatar.setProps({ src: undefined });
    expect(liAvatar.find(ImgAvatar)).not.toBePresent();
    expect(liAvatar.find(IconAvatar)).toBePresent();
  });
});
