import Dialog from 'dialog/Dialog';
import { DialogBase } from 'dialog/Dialog.style';
import ReactModal from 'react-modal';

const render = shallowComponent(
  Dialog,
  { contentLabel: 'test modal' },
  'Hello World',
);

describe('<Dialog />', () => {
  let dialog;

  beforeEach(() => {
    dialog = render();
  });

  it('renders a DialogBase', () => {
    expect(dialog.find(DialogBase)).toBePresent();
  });

  it('renders a ReactModal', () => {
    expect(dialog.find(ReactModal)).toBePresent();
  });

  it('renders its children', () => {
    expect(dialog.find(DialogBase).children().at(0).text()).toEqual(
      'Hello World',
    );
  });

  it('defaults to [prop] size to "5"', () => {
    expect(dialog.find(DialogBase)).toHaveProp('size', '5');
  });
});
