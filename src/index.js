import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, bindActionCreators, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import * as actionCreators from './actionCreators';

// Create Store
const middlewares = [];
middlewares.push(thunk.withExtraArgument());
const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);
bindActionCreators(actionCreators, store.dispatch);

// Attach provider and App to DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
