import { Exchange } from '../../Models'
import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'

// Actions
enum ExchangesActionTypes {
  GET_EXCHANGES_REQUEST = 'tsapp/exchanges/GET_EXCHANGES_REQUEST',
  GET_EXCHANGES_SUCCESS = 'tsapp/exchanges/GET_EXCHANGES_SUCCESS',
  GET_EXCHANGES_FAILURE = 'tsapp/exchanges/GET_EXCHANGES_FAILURE',
}

export const ExchangesActions = {
  getExchangesRequest: () => createAction(ExchangesActionTypes.GET_EXCHANGES_REQUEST),
  getExchangesSuccess: (exchangeById: ExchangeById, allIds: string[]) =>
    createAction(ExchangesActionTypes.GET_EXCHANGES_SUCCESS, { exchangeById, allIds }),
  getExchangesFailure: (error: string) =>
    createAction(ExchangesActionTypes.GET_EXCHANGES_FAILURE, { error }),
}

export type Actions = ActionsUnion<typeof ExchangesActions>

// Reducer
export interface ExchangeById {
  [exchangeId: string]: Exchange
}

export interface ExchangesReducer {
  readonly byId: ExchangeById
  readonly allIds: string[]
}

const InitialState: ExchangesReducer = {
  byId: {},
  allIds: [],
}

export function reducer(state: ExchangesReducer = InitialState, action: Actions) {
  switch (action.type) {
    case ExchangesActionTypes.GET_EXCHANGES_SUCCESS:
      return { ...state, byId: action.payload.exchangeById, allIds: action.payload.allIds }
    default:
      return state
  }
}
