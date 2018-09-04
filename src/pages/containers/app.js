import React, { Fragment, Component } from 'react';
import { StaticRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../components/header';
import Videos from './videos';
import Home from '../components/home';
import Contact from '../components/contact';
import NotFound from '../components/not-found';
import data from '../../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers/data';

const initialState = {
  data: {
    ...data
  },
  search: []
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/videos" component={Videos} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/v" to="/videos" />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </Fragment>
      </Provider>
    );
  }
}
