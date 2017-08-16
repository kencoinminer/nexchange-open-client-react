import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import "./js/bootstrap.min.js";
import "./js/material.min.js";
import "./js/material-kit.js";

import './css/index.scss';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers'
import App from './components/App';
import Order from './components/Order';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		<div>
  			<Switch>
  				<Route path="/order/:orderId" component={Order} />
	  			<Route path="/" component={App} />
	  		</Switch>
  		</div>
  	</BrowserRouter>
  </Provider>
  , document.getElementById('root'))
