import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import reducers from './reducers'
import mySaga from './sagas'

// create the logger middleware
const logger = createLogger()

// create the saga middleware
const saga = createSagaMiddleware()

// redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, saga, logger))
const store = createStore(reducers, enhancer)

// then run the saga
saga.run(mySaga)

export default store
