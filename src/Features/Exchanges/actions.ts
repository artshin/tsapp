import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ExchangesActions } from './reducer'
import { ReduxState } from 'Reducers'
import { CoinbaseAPI } from '../../API/Coinbase'

import Reactotron from 'reactotron-react-native'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

const wait = (timeoutMs: number) => new Promise(resolve => setTimeout(resolve, timeoutMs))

export const getExchanges = (): ThunkResult<void> => async (dispatch, getState) => {
  // await wait(2000)
  dispatch(ExchangesActions.getExchangesRequest())
  await CoinbaseAPI.methods.getExchanges()
  // Reactotron.log(getState())
  // await wait(2000)
  // dispatch(ExchangesActions.getExchangesFailure())
  // Reactotron.log(getState())
  // await wait(2000)
  // dispatch(ExchangesActions.getExchangesRequest())
  // Reactotron.log(getState())
  // await wait(2000)
  // dispatch(ExchangesActions.getExchangesSuccess())
  // Reactotron.log(getState())
}
