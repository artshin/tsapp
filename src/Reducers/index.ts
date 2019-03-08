import {
  combineReducers,
  createStore,
  applyMiddleware,
  Middleware,
  // StoreEnhancer,
  // compose,
  Action,
  Store,
} from 'redux'
import { reducer as billsReducer, BillsReducer } from '../Features/Bills/reducer'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { loadingReducer, LoadingReducer } from './LoadingReducer'
import { errorReducer, ErrorReducer } from './ErrorReducer'
import { appReducer, AppReducer } from './AppReducer'
import { resourceListsReducer, ResourceListsReducer } from './ResourceListReducer'
// import { reactotron } from '../Utils/ReactotronConfig'

export interface ReduxState {
  // bills: BillsReducer
  loading: LoadingReducer
  errors: ErrorReducer
  app: AppReducer
  resources: ResourceListsReducer
}

export type ReduxDispatch = ThunkDispatch<ReduxState, undefined, Action>

export default (): Store => {
  const rootReducer = combineReducers({
    // bills: billsReducer,
    loading: loadingReducer,
    errors: errorReducer,
    app: appReducer,
    resources: resourceListsReducer,
  })

  const middleware: Middleware[] = [thunk]
  // const enhancers: StoreEnhancer[] = []

  if (__DEV__ && reactotron.createStore) {
    return reactotron.createStore(rootReducer, applyMiddleware(...middleware))
  }

  return createStore(rootReducer, applyMiddleware(...middleware))
}
