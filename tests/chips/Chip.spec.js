import { ChipBase } from 'chips/Chip';
import { ChipContact } from 'chips';
import { ChipAction } from 'chips/Chip.style';

const render = shallowComponent(ChipBase, {}, 'children');

describe('<Chip />', () => {
  let chip;

  beforeEach(() => {
    chip = render();
  });

  describe('by default', () => {
    it('does not render a <ChipAction>', () => {
      expect(chip.find('ChipAction')).not.toBePresent();
    });

    it('does not render a <ChipContact>', () => {
      expect(chip.find(ChipContact)).not.toBePresent();
    });
  });

  describe('when there is a contact', () => {
    it('renders a <ChipContact>', () => {
      chip.setProps({ contact: { text: 'foo' } });

      expect(chip.find(ChipContact)).toBePresent();
    });
  });

  describe('when deletable', () => {
    beforeEach(() => chip.setProps({ deletable: true }));

    it('renders a <ChipAction>', () => {
      expect(chip.find(ChipAction)).toBePresent();
    });

    it('calls prop onClickDelete when ChipAction is clicked', () => {
      const onClickDelete = jest.fn();
      const event = 'event';

      chip.setProps({ onClickDelete });

      chip.find(ChipAction).simulate('click', event);

      expect(onClickDelete).toHaveBeenCalledWith(event);
    });
  });
});
