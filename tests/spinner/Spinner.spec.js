import Spinner, { Layer } from 'spinner/Spinner';
import {
  Spinner as SpinnerStyle,
  LayerOne,
  LayerTwo,
  LayerThree,
  LayerFour,
  GapPatch,
  CircleClipper,
  Circle,
} from 'spinner/Spinner.style';

const render = shallowComponent(Spinner, { active: true });

describe('<Spinner />', () => {
  let spinner;

  beforeEach(() => {
    spinner = render();
  });

  it('renders a <SpinnerStyle>', () => {
    expect(spinner.find(SpinnerStyle)).toBePresent();
  });

  it('renders each layer', () => {
    expect(spinner.find(Layer).at(0)).toHaveProp('level', LayerOne);
    expect(spinner.find(Layer).at(1)).toHaveProp('level', LayerTwo);
    expect(spinner.find(Layer).at(2)).toHaveProp('level', LayerThree);
    expect(spinner.find(Layer).at(3)).toHaveProp('level', LayerFour);
  });
});

const renderLayer = shallowComponent(Layer, { level: LayerOne });

describe('<Layer />', () => {
  let layer;

  beforeEach(() => {
    layer = renderLayer();
  });

  it('renders the Level', () => {
    expect(layer.find(LayerOne)).toBePresent();
  });

  it('renders the clippers', () => {
    const leftClipper = layer.find(CircleClipper).at(0);
    const rightClipper = layer.find(CircleClipper).at(1);
    expect(leftClipper).toHaveProp('left', true);
    expect(leftClipper.children().type()).toEqual(Circle);
    expect(leftClipper.children()).toHaveProp('left', true);
    expect(leftClipper.children()).toHaveProp('clipper', true);

    expect(rightClipper).toHaveProp('right', true);
    expect(rightClipper.children().type()).toEqual(Circle);
    expect(rightClipper.children()).toHaveProp('right', true);
    expect(rightClipper.children()).toHaveProp('clipper', true);
  });

  it('renders the gap patch', () => {
    const patch = layer.find(GapPatch);
    expect(patch).toBePresent();
    expect(patch.children().type()).toEqual(Circle);
    expect(patch.children()).toHaveProp('gap', true);
  });
});
