import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ReduxState } from 'Reducers'
import { getExchanges } from '../Features/Exchanges/actions'
import { getMarkets } from '../Features/Markets/actions'
import { AppActions, AppStatus } from '../Reducers/AppReducer'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

export const loadAppData = (): ThunkResult<void> => async (dispatch, getState) => {
  dispatch(AppActions.updateAppStatus(AppStatus.Loading))

  await dispatch(getExchanges())
  const state = getState()
  await dispatch(getMarkets(state.exchanges.allIds))

  dispatch(AppActions.updateAppStatus(AppStatus.Ready))
}
