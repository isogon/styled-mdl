import React from 'react';
import { Theme, initGlobals, createTheme, colors } from 'material-components';
import AppWrapper from 'components/AppWrapper';
import SideNav from 'components/SideNav';
import ContentWrapper from 'components/ContentWrapper';
import TopBar from 'components/TopBar';

import { sideNavLinks } from './navigation';

initGlobals({ fontObserver: 'Roboto' });

const theme = createTheme({
  colorPrimary: colors.indigo[500],
  colorPirmaryDark: colors.indigo[700],
  colorAccent: colors.pink[500],
});
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Theme theme={theme}>
        <div>
          <AppWrapper>
            <SideNav links={sideNavLinks} />
            <ContentWrapper>
              <TopBar />
              {React.Children.toArray(this.props.children)}
            </ContentWrapper>
          </AppWrapper>
        </div>
      </Theme>
    );
  }
}
