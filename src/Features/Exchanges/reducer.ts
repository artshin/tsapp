import { Action } from 'redux'

enum ExchangesActionTypes {
  GET_EXCHANGES_REQUEST = 'tsapp/exchanges/GET_EXCHANGES_REQUEST',
  GET_EXCHANGES_SUCCESS = 'tsapp/exchanges/GET_EXCHANGES_SUCCESS',
  GET_EXCHANGES_FAILURE = 'tsapp/exchanges/GET_EXCHANGES_FAILURE',
}

export interface ExchangesState {
  readonly loading: boolean
  readonly exchanges: any[]
}

const InitialState: ExchangesState = {
  loading: false,
  exchanges: [],
}

// Reducer
export function reducer(state: ExchangesState = InitialState, action: Action) {
  switch (action.type) {
    case ExchangesActionTypes.GET_EXCHANGES_SUCCESS:
      return { ...state, exchanges: ['yo'] }
    default:
      return state
  }
}

// Action Creators
const getExchangesRequest = (): Action => ({ type: ExchangesActionTypes.GET_EXCHANGES_REQUEST })
const getExchangesSuccess = (): Action => ({ type: ExchangesActionTypes.GET_EXCHANGES_SUCCESS })
const getExchangesFailure = (): Action => ({ type: ExchangesActionTypes.GET_EXCHANGES_FAILURE })

export const ExchangesActions = {
  getExchangesRequest,
  getExchangesSuccess,
  getExchangesFailure,
}
