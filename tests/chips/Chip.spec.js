import Chip, { ChipBase } from '../../src/components/chips/Chip';
import { ChipContact } from '../../src/components/chips';
import { ChipAction } from '../../src/components/chips/Chip.style';

const render = shallowComponent(Chip, {}, 'children');

describe('<Chip />', () => {
  let chip;

  beforeEach(() => {
    chip = render();
  });

  it('has the right displayName', () => {
    expect(Chip.displayName).toEqual('Chip');
  });

  it('is deeply extendable', () => {
    expect(typeof Chip.extend).toEqual('function');
    expect(typeof Chip.extend``.extend).toEqual('function');
  });

  describe('by default', () => {
    it('does not render a <ChipAction>', () => {
      expect(chip.until(ChipBase).find('ChipAction')).not.toBePresent();
    });

    it('does not render a <ChipContact>', () => {
      expect(chip.until(ChipBase).find(ChipContact)).not.toBePresent();
    });
  });

  describe('when there is a contact', () => {
    it('renders a <ChipContact>', () => {
      chip.setProps({ contact: { text: 'foo' } });

      expect(chip.until(ChipBase).find(ChipContact)).toBePresent();
    });
  });

  describe('when deletable', () => {
    beforeEach(() => chip.setProps({ deletable: true }));

    it('renders a <ChipAction>', () => {
      expect(chip.until(ChipBase).find(ChipAction)).toBePresent();
    });

    it('calls prop onClickDelete when ChipAction is clicked', () => {
      const onClickDelete = jest.fn();
      const event = 'event';

      chip.setProps({ onClickDelete });

      chip
        .until(ChipBase)
        .find(ChipAction)
        .simulate('click', event);

      expect(onClickDelete).toHaveBeenCalledWith(event);
    });
  });
});
