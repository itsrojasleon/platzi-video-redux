import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = { data }

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState());

const homeContainer = document.getElementById('home-container')

hydrate(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
)
