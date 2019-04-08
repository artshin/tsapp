import {
  combineReducers,
  createStore,
  applyMiddleware,
  Middleware,
  compose,
  Action,
  Store,
} from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { appReducer, AppReducer } from './AppReducer'
import { connectToReactotron } from '../Utils/ReactotronConfig'
import {
  loadingReducer,
  errorReducer,
  resourceListsReducer,
  LoadingReducer,
  ErrorReducer,
  ResourceListsReducer,
} from 'redux-convenience-reducers'
import { reducer as formReducer } from 'redux-form'

export interface ReduxState {
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
    form: formReducer,
  })

  const middleware: Middleware[] = [thunk]
  // const enhancers: StoreEnhancer[] = []
  const reactotron = connectToReactotron()
  if (__DEV__ && reactotron.createEnhancer) {
    return createStore(
      rootReducer,
      compose(
        applyMiddleware(...middleware),
        reactotron.createEnhancer(),
      ),
    )
  }

  return createStore(rootReducer, compose(applyMiddleware(...middleware)))
}
