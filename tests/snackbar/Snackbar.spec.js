import Snackbar from 'snackbar/Snackbar';
import Toast from 'snackbar/Toast.style';
import Message from 'snackbar/Message.style';
import Action from 'snackbar/Action.style';

const render = shallowComponent(Snackbar, { message: 'message' });

describe('<Snackbar />', () => {
  let snackbar;

  beforeEach(() => {
    snackbar = render();
  });

  it('renders a <Toast>', () => {
    expect(snackbar.find(Toast)).toBePresent();
  });

  it('renders a <Message> with [prop] message', () => {
    snackbar.setProps({ message: 'message' });
    expect(snackbar.find(Message)).toHaveInnerText('message');
  });

  it('only renders an <Action> when [prop] actionText is defined', () => {
    expect(snackbar.find(Action)).not.toBePresent();
  });

  it('renders an <Action> with [prop] actionText', () => {
    snackbar.setProps({ actionText: 'action' });
    expect(snackbar.find(Action)).toHaveInnerText('action');
  });

  it('triggers [prop] actionHander when <Action> is clicked', () => {
    const actionHandler = jest.fn();
    snackbar.setProps({ actionHandler, actionText: 'action' });

    snackbar.find(Action).simulate('click');

    expect(actionHandler).toHaveBeenCalled();
  });
});
