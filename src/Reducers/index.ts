import {
  combineReducers,
  createStore,
  applyMiddleware,
  Middleware,
  StoreEnhancer,
  compose,
  Action,
} from 'redux'
import { reducer as exchangesReducer, ExchangesState } from '../Features/Exchanges/reducer'
import thunk, { ThunkDispatch } from 'redux-thunk'
import Reactotron from '../Utils/ReactotronConfig'
import { loadingReducer, LoadingReducer } from './LoadingReducer'
import { errorReducer, ErrorReducer } from './ErrorReducer'

export interface ReduxState {
  exchanges: ExchangesState
  loadingReducer: LoadingReducer
  errorReducer: ErrorReducer
}

export type ReduxDispatch = ThunkDispatch<ReduxState, undefined, Action>

export default () => {
  const rootReducer = combineReducers({
    exchanges: exchangesReducer,
    loading: loadingReducer,
    errors: errorReducer,
  })

  const middleware: Middleware[] = []
  const enhancers: StoreEnhancer[] = []

  middleware.push(thunk)
  enhancers.push(applyMiddleware(...middleware))

  if (__DEV__ && Reactotron.createStore) {
    return Reactotron.createStore(rootReducer, compose(...enhancers))
  }
  return createStore(rootReducer, compose(...enhancers))
}
