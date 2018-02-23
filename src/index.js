import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Async from './middleware/async';
import { Link, Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/layout/layout';
import UserList from './components/register/user-components/user_list';
import Casino from './components/casino/game-components/index';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
          <Router history = { browserHistory } >
              <Route path = '/' component = { App } >
                  <IndexRoute component = { Casino } />
                  <Route path='/Casino' component = { Casino }> </Route>
                  <Route path='/Register' component = { UserList }> </Route>
              </Route>
          </Router>
  </Provider>
, document.querySelector('.container'));
