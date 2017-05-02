import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { shadow4dp, util } from 'material-components';
import { Link } from 'react-router';

const { getters: g } = util;

const Nav = styled.aside`
  width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  padding: 32px 0;
  ${shadow4dp}
  overflow: auto;
`;

const NavLink = styled(Link)`
  display: block;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  color: ${g.fg};
  text-decoration: none;
  &.active {
    color: ${g.textLinkColor};
    font-weight: 600;
  }
`;

const SideNav = ({ links }) => (
  <Nav>
    {links.map((link, i) => (
      <NavLink key={i} to={link.to} activeClassName="active">
        {link.label}
      </NavLink>
    ))}
  </Nav>
);

SideNav.propTypes = {
  links: PropTypes.array,
};

export default SideNav;
