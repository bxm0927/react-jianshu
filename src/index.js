import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

// global style
import './assets/stylesheets/normalize.scss'
import './assets/stylesheets/common.scss'
import './assets/fonts/iconfont.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
