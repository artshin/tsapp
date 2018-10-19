import {
  combineReducers,
  createStore,
  applyMiddleware,
  Middleware,
  StoreEnhancer,
  compose,
} from 'redux'
import { reducer as exchangesReducer, ExchangesState } from './Exchanges'

export interface ReduxState {
  exchanges: ExchangesState
}

export default () => {
  const rootReducer = combineReducers({
    exchanges: exchangesReducer,
  })

  const middleware: Middleware[] = []
  const enhancers: StoreEnhancer[] = []

  enhancers.push(applyMiddleware(...middleware))

  return createStore(rootReducer, compose(...enhancers))
}
