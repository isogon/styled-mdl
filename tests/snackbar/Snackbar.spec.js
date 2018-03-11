import Snackbar, { SnackbarBase } from '../../src/snackbar/Snackbar';

const render = shallowComponent(Snackbar, { message: 'message' });

describe('<Snackbar />', () => {
  let snackbar;

  beforeEach(() => {
    snackbar = render();
  });

  it('has the right displayName', () => {
    expect(Snackbar.displayName).toEqual('Snackbar');
  });

  it('is deeply extendable', () => {
    expect(typeof Snackbar.extend).toEqual('function');
    expect(typeof Snackbar.extend``.extend).toEqual('function');
  });

  it('renders a <SnackbarMessage> with [prop] message', () => {
    snackbar.setProps({ message: 'message' });
    expect(
      snackbar.until(SnackbarBase).find('SnackbarMessage'),
    ).toHaveInnerText('message');
  });

  it('only renders an <SnackbarAction> when [prop] actionText is defined', () => {
    expect(
      snackbar.until(SnackbarBase).find('SnackbarAction'),
    ).not.toBePresent();
  });

  it('renders an <SnackbarAction> with [prop] actionText', () => {
    snackbar.setProps({ actionText: 'action' });
    expect(snackbar.until(SnackbarBase).find('SnackbarAction')).toHaveInnerText(
      'action',
    );
  });

  it('triggers [prop] actionHander when <SnackbarAction> is clicked', () => {
    const actionHandler = jest.fn();
    snackbar.setProps({ actionHandler, actionText: 'action' });

    snackbar
      .until(SnackbarBase)
      .find('SnackbarAction')
      .simulate('click');

    expect(actionHandler).toHaveBeenCalled();
  });
});
