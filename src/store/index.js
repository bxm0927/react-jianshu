import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'

const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, logger))
const store = createStore(reducer, enhancer)

export default store
