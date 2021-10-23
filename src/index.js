import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import store from './redux/store'
import { Provider } from 'react-redux'
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <Routing/>
  </Provider>,
  document.getElementById('root')
);
