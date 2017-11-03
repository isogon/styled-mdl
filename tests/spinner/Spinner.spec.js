import { SpinnerBase } from 'spinner/Spinner';

const render = shallowComponent(SpinnerBase, { active: true });

describe('<Spinner />', () => {
  let spinner;

  beforeEach(() => {
    spinner = render();
  });

  it('renders a the spinnerStyle', () => {
    expect(spinner.find('div')).toBePresent();
    expect(spinner.find('div')).toHaveProp('className');
  });

  it('renders each layer', () => {
    expect(spinner.find('LayerOne')).toBePresent();
    expect(spinner.find('LayerTwo')).toBePresent();
    expect(spinner.find('LayerThree')).toBePresent();
    expect(spinner.find('LayerFour')).toBePresent();
  });
});
