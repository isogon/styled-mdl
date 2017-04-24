import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'containers/App';
import Buttons from 'containers/Buttons';
import Cards from 'containers/Cards';
import Snackbar from 'containers/Snackbar';
import Toggles from 'containers/Toggles';
import Loading from 'containers/Loading';
import TextFields from 'containers/TextFields';
import Chips from 'containers/Chips';

const routes = (
  <Route name="app" path="/" component={App}>
    <IndexRedirect to="/cards" />
    <Route path="/buttons" component={Buttons} />
    <Route path="/cards" component={Cards} />
    <Route path="/snackbar" component={Snackbar} />
    <Route path="/toggles" component={Toggles} />
    <Route path="/loading" component={Loading} />
    <Route path="/textfields" component={TextFields} />
    <Route path="/chips" component={Chips} />
  </Route>
);

export default routes;
