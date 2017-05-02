import React from 'react';
import styled from 'styled-components';
import { MdLink } from 'react-icons/lib/md';

import { util, Spacer } from 'material-components';

const { getters: g } = util;

const Header = styled.header`
  height: 64px;
  background: #FAFAFA;
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
  top: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${g.textLinkColor}
`;

const TopBarLink = styled.a`
  font-weight: 500;
  font-size: 13px;
  text-decoration: none;
  color: #888;
  opacity: 0.65;
  &:hover {
    opacity: 1;
  }
`;

const GitHub = styled(MdLink)`
  font-size: 24px;
  margin-right: 8px;
  margin-top: -2px;
`;

const TopBar = () => (
  <Header>
    <Title>Material <br /> Design <br />Components</Title>
    <Spacer />
    <TopBarLink href="https://github.com/isogon/material-components">
      <GitHub /> GitHub
    </TopBarLink>
  </Header>
);

export default TopBar;
