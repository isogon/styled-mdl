import Progress from 'progress/Progress';
import { ProgressBase, ProgressBar, BufferBar, AuxBar } from 'progress/Progress.style';

const render = shallowComponent(Progress);

describe('<Progress />', () => {
  let progress;

  beforeEach(() => {
    progress = render();
  });

  it('renders a ProgressBase', () => {
    expect(progress.find(ProgressBase)).toBePresent();
  });

  it('renders a ProgressBar', () => {
    expect(progress.find(ProgressBar)).toBePresent();
  });

  it('renders a BufferBar', () => {
    expect(progress.find(BufferBar)).toBePresent();
  });

  it('renders an AuxBar', () => {
    expect(progress.find(AuxBar)).toBePresent();
  });
});
