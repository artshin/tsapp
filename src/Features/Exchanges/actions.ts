import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ExchangesActions, ExchangeById } from './reducer'
import { ReduxState } from 'Reducers'
import { ExchangesAPI } from '../../API'
import Reactotron from 'reactotron-react-native'

type ThunkResult<R> = ThunkAction<R, ReduxState, undefined, Action>

export const getExchanges = (): ThunkResult<void> => async dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(ExchangesActions.getExchangesRequest())

      const exchanges = await ExchangesAPI.methods.getExchanges()

      const ids = exchanges.map(el => el.id)
      const exchangesById: ExchangeById = {}

      exchanges.forEach(el => {
        exchangesById[el.id] = el
      })

      dispatch(ExchangesActions.getExchangesSuccess(exchangesById, ids))
      Reactotron.log(2)
      resolve()
    } catch (error) {
      dispatch(ExchangesActions.getExchangesFailure(error.message))
      reject(error)
    }
  })
}
