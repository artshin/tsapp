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
import { reducer as exchangesReducer, ExchangesReducer } from '../Features/Exchanges/reducer'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { loadingReducer, LoadingReducer } from './LoadingReducer'
import { errorReducer, ErrorReducer } from './ErrorReducer'
import { appReducer, AppReducer } from './AppReducer'
import { reactotron } from '../Utils/ReactotronConfig'

export interface ReduxState {
  exchanges: ExchangesReducer
  loadingReducer: LoadingReducer
  errorReducer: ErrorReducer
  app: AppReducer
}

export type ReduxDispatch = ThunkDispatch<ReduxState, undefined, Action>

export default (): Store => {
  const rootReducer = combineReducers({
    exchanges: exchangesReducer,
    loading: loadingReducer,
    errors: errorReducer,
    app: appReducer,
  })

  const middleware: Middleware[] = []
  const enhancers: StoreEnhancer[] = []

  middleware.push(thunk)
  enhancers.push(applyMiddleware(...middleware))

  if (__DEV__ && reactotron.createStore) {
    return reactotron.createStore(rootReducer, compose(...enhancers))
  }

  return createStore(rootReducer, compose(...enhancers))
}
