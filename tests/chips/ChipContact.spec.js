import ChipContact from '../../src/chips/ChipContact';
import { ChipContactImg, ChipContactSpan } from '../../src/chips/Chip.style';

const render = shallowComponent(ChipContact);

describe('<ChipContact />', () => {
  let chipContact;

  beforeEach(() => {
    chipContact = render();
  });

  it('has the right displayName', () => {
    expect(ChipContact.name).toEqual('ChipContact');
  });

  describe('when it has an image', () => {
    it('renders a <ChipContactImg>', () => {
      chipContact.setProps({ src: 'image.jpg' });

      expect(chipContact.find(ChipContactImg)).toBePresent();
    });
  });

  describe('when it has no image', () => {
    it('renders a <ChipContactSpan>', () => {
      chipContact.setProps({ text: 'text' });

      expect(chipContact.find(ChipContactSpan)).toBePresent();
    });
  });
});
