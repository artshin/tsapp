import { Action } from 'redux'

enum ExchangesActionTypes {
  GET = 'tsapp/exchanges/GET',
}

export interface ExchangesState {
  readonly exchanges: any[]
}

const InitialState: ExchangesState = {
  exchanges: [],
}

// Reducer
export function reducer(state: ExchangesState = InitialState, action: Action) {
  switch (action.type) {
    case ExchangesActionTypes.GET:
      return { ...state, exchanges: ['yo'] }
    default:
      return state
  }
}

// Action Creators
const getExchanges = (): Action => ({ type: ExchangesActionTypes.GET })

export const ExchangesActions = {
  getExchanges,
}
