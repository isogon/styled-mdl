import { defaultProps } from 'recompose';
import React from 'react';
import styled from 'styled-components';

import { util, Spacer, Icon } from 'material-components';

const { getters: g } = util;

const Header = styled.header`
  margin-top: 48px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  color: black;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${g.textLinkColor};
`;

const TopBarLink = styled.a`
  font-weight: 500;
  font-size: 13px;
  text-decoration: none;
  color: #888;
  opacity: 0.65;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`;

const GitHub = defaultProps({ name: 'link' })(Icon.extend`
  position: relative;
  font-size: 24px;
  margin-right: 8px;
`);

const TopBar = () => (
  <Header>
    <Title>Styled MDL</Title>
    <Spacer />
    <TopBarLink href="https://github.com/isogon/material-components">
      <GitHub /> GitHub
    </TopBarLink>
  </Header>
);

export default TopBar;
