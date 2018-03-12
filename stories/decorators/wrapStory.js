import styled, { injectGlobal } from 'styled-components';
import React from 'react';

import { Theme, initGlobals, createTheme, colors } from '../../src';

initGlobals({ fontObserver: 'Roboto' });

const theme = createTheme({
  colorPrimary: colors.indigo[500],
  colorPirmaryDark: colors.indigo[700],
  colorAccent: colors.pink[500],
});

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html, body, #root {
    height: 100%;
  }
  body {
    height: calc(100% - 16px);
  }
`;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StoryWrap = (props) => (
  <Theme theme={theme}>
    <Wrap>{props.children}</Wrap>
  </Theme>
);

export default (fn) => <StoryWrap>{fn()}</StoryWrap>;
