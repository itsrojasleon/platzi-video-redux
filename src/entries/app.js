import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data'

const initialState = {
  data: {
    ...data
  },
  search: []
}

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
      <Home />
    </Provider>
  </BrowserRouter>,
  homeContainer
)
