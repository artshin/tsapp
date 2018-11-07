import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { MarketsActions } from './reducer'
import { ReduxState } from 'Reducers'
import { exchangeApiByName } from '../../API'
import Reactotron from 'reactotron-react-native'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

export const getMarkets = (exchangeIds: string[]): ThunkResult<void> => async dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(MarketsActions.getMarketsRequest())

      exchangeIds.forEach(async exchangeId => {
        const apiClient = exchangeApiByName[exchangeId]
        if (!apiClient) {
          return
        }
        const markets = await apiClient.getMarkets()
        Reactotron.log(markets)
      })

      dispatch(MarketsActions.getMarketsSuccess({}, []))
      resolve()
    } catch (error) {
      dispatch(MarketsActions.getMarketsFailure(error.message))
      reject(error)
    }
  })
}
