import { ChipContact } from 'chips';
import { ChipContactImg, ChipContactSpan } from 'chips/Chip.style';

const render = shallowComponent(ChipContact);

describe('<ChipContact />', () => {
  let chipContact;

  beforeEach(() => {
    chipContact = render();
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
