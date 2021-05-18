import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './global.scss';

import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA