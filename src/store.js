import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'
import { setAppLoaded } from './actions'

let middlewares = [thunk, logger]

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

export default store
