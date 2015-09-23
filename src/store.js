import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { List } from 'immutable'
import * as reducers from './reducers'

let storeComposition = []

if (process.env.NODE_ENV == 'development') {
  const { devTools, persistState } = require('redux-devtools')

  storeComposition.push(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )
}

const rootReducer = combineReducers(reducers)
const finalCreateStore = compose(...storeComposition)(createStore)

export default finalCreateStore(rootReducer)
