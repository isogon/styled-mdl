import React from 'react';
import { uniqueId, random, tail } from 'lodash';
import { shallow } from 'enzyme';
import { SnackbarContainer, Snackbar, Toast } from 'material-components';

const render = (props) => shallow(<SnackbarContainer {...props} />);

const randomMessage = () => ({
  message: uniqueId('message'),
  actionText: uniqueId('actionText'),
  actionHandler: jest.fn(),
  timeout: random(500, 5000),
});

describe('<SnackbarContainer />', () => {
  let messages;
  let onEnter;
  let onRequestLeave;
  let wrapper;

  beforeEach(() => {
    messages = [];
    onEnter = jest.fn();
    onRequestLeave = jest.fn();
    wrapper = render({ messages, onEnter, onRequestLeave });
    jest.useFakeTimers();
  });

  describe('when it has messages to show', () => {
    beforeEach(() => {
      messages = new Array(5).fill().map(randomMessage);
      wrapper.setProps({ messages });
    });

    it('triggers [prop] onEnter with message', () => {
      expect(onEnter).toHaveBeenCalledWith(messages[0]);
    });

    it('animates in', () => {
      expect(wrapper.find(Toast)).toHaveProp('isActive', true);
    });

    it('displays the first message in its [prop] messages', () => {
      expect(wrapper.find(Snackbar)).toHaveProp('message', messages[0].message);
      expect(wrapper.find(Snackbar)).toHaveProp(
        'actionText',
        messages[0].actionText
      );
      expect(wrapper.find(Snackbar)).toHaveProp(
        'actionHandler',
        messages[0].actionHandler
      );
    });

    describe('when a message runs to the end of its timer', () => {
      it('triggers [prop] onRequestLeave with the message', () => {
        expect(onRequestLeave).not.toHaveBeenCalled();
        jest.runTimersToTime(messages[0].timeout);
        expect(onRequestLeave).toHaveBeenCalledWith(messages[0]);
      });
    });

    describe('when the first message changes', () => {
      beforeEach(() => {
        wrapper.setProps({ messages: tail(messages) });
      });

      it('animates the old message out', () => {
        expect(wrapper.find(Toast)).toHaveProp('isActive', false);
      });

      it('does not change the displayed message until it animates out', () => {
        expect(wrapper.find(Snackbar)).toHaveProp(
          'message',
          messages[0].message
        );
        expect(wrapper.find(Snackbar)).toHaveProp(
          'actionText',
          messages[0].actionText
        );
        expect(wrapper.find(Snackbar)).toHaveProp(
          'actionHandler',
          messages[0].actionHandler
        );
      });

      describe('when it finishes animating', () => {
        beforeEach(jest.runOnlyPendingTimers);

        it('animates back in', () => {
          expect(wrapper.find(Toast)).toHaveProp('isActive', true);
        });

        it('shows the new message', () => {
          expect(wrapper.find(Snackbar)).toHaveProp(
            'message',
            messages[1].message
          );
          expect(wrapper.find(Snackbar)).toHaveProp(
            'actionText',
            messages[1].actionText
          );
          expect(wrapper.find(Snackbar)).toHaveProp(
            'actionHandler',
            messages[1].actionHandler
          );
        });
      });
    });

    describe('when the first message has not changed', () => {
      let applyNext;

      beforeEach(() => {
        wrapper.setProps({ messages: [messages[0]] });
        applyNext = wrapper.instance().applyNext = jest.fn();
      });

      it('does not call applyNext', () => {
        expect(applyNext).not.toHaveBeenCalled();
      });
    });

    describe('when there are no more messages', () => {
      beforeEach(() => {
        wrapper.setProps({ messages: [] });
        jest.runOnlyPendingTimers();
      });

      it('hides the snackbar', () => {
        expect(wrapper.find(Toast)).toHaveProp('isActive', false);
      });

      it('clears the message', () => {
        expect(wrapper.find(Snackbar)).not.toHaveProp('message');
        expect(wrapper.find(Snackbar)).not.toHaveProp('actionText');
        expect(wrapper.find(Snackbar)).not.toHaveProp('actionHandler');
      });
    });
  });
});
