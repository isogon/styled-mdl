import React from 'react';
import { Theme, Snackbar } from 'material-components';
import styled from 'styled-components';
import AppWrapper from 'components/AppWrapper';
import SideNav from 'components/SideNav';
import ContentWrapper from 'components/ContentWrapper';
import TopBar from 'components/TopBar';

import { sideNavLinks } from './navigation';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  componentDidMount() {
    window.addEventListener('snack', ({ toast }) => {
      this.setState({ toasts: [...this.state.toasts, { ...toast, active: true }] });
      setTimeout(() => {
        this.setState({
          toasts: this.state.toasts.map((t) => (
            t.message === toast.message ? { ...t, active: false } : t
          )),
        });
      }, 2000);
      setTimeout(() => {
        this.setState({ toasts: this.state.toasts.filter((t) => t.message !== toast.message) });
      }, 2500);
    });

    const newToast = (message) => {
      const snack = new Event('snack');
      snack.toast = { message };
      window.dispatchEvent(snack);
    };

    newToast('hello, World!');
    setTimeout(() => newToast('goodbye, cruel world!'), 1000);
  }

  render() {
    const toast = this.state.toasts[0];

    return (
      <Theme>
        <Wrap>
          <TopBar />
          <AppWrapper>
            <SideNav links={sideNavLinks} />
            <ContentWrapper>
              {React.Children.toArray(this.props.children)}
            </ContentWrapper>
          </AppWrapper>
          {this.state.toasts.length && <Snackbar {...toast} />}
        </Wrap>
      </Theme>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
