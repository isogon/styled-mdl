import { ProgressBase } from 'progress/Progress';
import { ProgressBar, BufferBar, AuxBar } from 'progress/Progress.style';

const render = shallowComponent(ProgressBase);

describe('<Progress />', () => {
  let progress;

  beforeEach(() => {
    progress = render();
  });

  it('renders progressBaseStyle', () => {
    expect(progress.find('div')).toHaveProp('className');
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
