import {
  combineReducers,
  createStore,
  applyMiddleware,
  Middleware,
  StoreEnhancer,
  compose,
  Action,
  Store,
} from 'redux'
import { reducer as exchangesReducer, ExchangesState } from '../Features/Exchanges/reducer'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { loadingReducer, LoadingReducer } from './LoadingReducer'
import { errorReducer, ErrorReducer } from './ErrorReducer'
import Reactotron from '../Utils/ReactotronConfig'

export interface ReduxState {
  exchanges: ExchangesState
  loadingReducer: LoadingReducer
  errorReducer: ErrorReducer
}

export type ReduxDispatch = ThunkDispatch<ReduxState, undefined, Action>

export default (): Store => {
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
