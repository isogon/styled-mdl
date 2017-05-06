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
import Badges from 'containers/Badges';
import Dialog from 'containers/Dialog';
import Lists from 'containers/Lists';
import Menus from 'containers/Menus';
import Sliders from 'containers/Sliders';
import Tables from 'containers/Tables';

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
    <Route path="/badges" component={Badges} />
    <Route path="/dialogs" component={Dialog} />
    <Route path="/lists" component={Lists} />
    <Route path="/menus" component={Menus} />
    <Route path="/sliders" component={Sliders} />
    <Route path="/tables" component={Tables} />
  </Route>
);

export default routes;
