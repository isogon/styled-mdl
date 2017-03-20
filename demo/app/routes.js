import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'containers/App';
import Buttons from 'containers/Buttons';
import Cards from 'containers/Cards';
import Snackbar from 'containers/Snackbar';

const routes = (
  <Route name="app" path="/" component={App}>
    <IndexRedirect to="/cards" />
    <Route path="/buttons" component={Buttons} />
    <Route path="/cards" component={Cards} />
    <Route path="/snackbar" component={Snackbar} />
  </Route>
);

export default routes;
