import React from 'react'
import ReactDOM from 'react-dom'
import Routing from './Routing'
import store from './redux/store'
import { Provider } from 'react-redux'
import "./index.css"
import Theme from './ThemeHOC'
ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <Routing />
    </Theme>
  </Provider>,
  document.getElementById('root')
)
