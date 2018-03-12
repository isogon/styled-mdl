import Spinner, { SpinnerBase } from '../../src/components/spinner/Spinner';

const render = shallowComponent(Spinner, { active: true });

describe('<Spinner />', () => {
  let spinner;

  beforeEach(() => {
    spinner = render().until(SpinnerBase);
  });

  it('has the right displayName', () => {
    expect(Spinner.displayName).toEqual('Spinner');
  });

  it('is deeply extendable', () => {
    expect(typeof Spinner.extend).toEqual('function');
    expect(typeof Spinner.extend``.extend).toEqual('function');
  });

  it('renders each layer', () => {
    expect(spinner.find('LayerOne')).toBePresent();
    expect(spinner.find('LayerTwo')).toBePresent();
    expect(spinner.find('LayerThree')).toBePresent();
    expect(spinner.find('LayerFour')).toBePresent();
  });
});
