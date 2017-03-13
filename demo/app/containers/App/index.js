import React from 'react';
import { Theme } from 'material-components';
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
export default function App(props) {
  return (
    <Theme>
      <Wrap>
        <TopBar />
        <AppWrapper>
          <SideNav links={sideNavLinks} />
          <ContentWrapper>
            {React.Children.toArray(props.children)}
          </ContentWrapper>
        </AppWrapper>
      </Wrap>
    </Theme>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};
