import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../pages/components/header';
import Videos from '../pages/containers/videos';
import Home from '../pages/components/home';
import Contact from '../pages/components/contact';
import data from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';

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
)
console.log(store.getState());

const homeContainer = document.getElementById('home-container')

hydrate(
  <BrowserRouter 
    basename="/"
  >
    <Provider store={store}>
      <Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/videos" component={Videos} />
        <Route path="/contact" component={Contact} />
      </Fragment>
    </Provider>
  </BrowserRouter>,
  homeContainer
)
