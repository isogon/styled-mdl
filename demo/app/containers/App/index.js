import React from 'react';
import { Theme, initGlobals } from 'material-components';
import AppWrapper from 'components/AppWrapper';
import SideNav from 'components/SideNav';
import ContentWrapper from 'components/ContentWrapper';
import TopBar from 'components/TopBar';

import { sideNavLinks } from './navigation';

initGlobals('Roboto');

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Theme>
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
