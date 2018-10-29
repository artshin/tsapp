import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Actions as ExchangesActions, ExchangeById } from './reducer'
import { ReduxState } from 'Reducers'
import { ExchangesAPI, BinanceAPI, BittrexAPI, CoinbaseAPI } from '../../API'
import Reactotron from 'reactotron-react-native'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

export const getExchanges = (): ThunkResult<void> => async dispatch => {
  try {
    dispatch(ExchangesActions.getExchangesRequest())

    const exchanges = await ExchangesAPI.methods.getExchanges()

    const ids = exchanges.map(el => el.id)
    const exchangesById: ExchangeById = {}

    exchanges.forEach(el => {
      exchangesById[el.id] = el
    })

    dispatch(ExchangesActions.getExchangesSuccess(exchangesById, ids))
  } catch (error) {
    dispatch(ExchangesActions.getExchangesFailure(error.message))
  }
}

export const getMarketsForAllExchanges = (): ThunkResult<void> => async dispatch => {
  try {
    const exchangeAPIs = [BittrexAPI, CoinbaseAPI, BinanceAPI]

    await exchangeAPIs.forEach(async api => {
      const markets = await api.getMarkets()
      Reactotron.log(markets)
    })
  } catch {}
}
