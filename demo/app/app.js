import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { injectGlobal } from 'styled-components';

import routes from './routes';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html,
  body {
    background-color: #eee;
    height: 100%;
    width: 100%;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`;

ReactDOM.render(
  <Router
    routes={routes}
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  />,
  document.getElementById('app')
);
