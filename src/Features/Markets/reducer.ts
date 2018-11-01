import { Market } from '../../Models'
import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'

// Actions
enum MarketsActionTypes {
  GET_MARKETS_REQUEST = 'tsapp/markets/GET_MARKETS_REQUEST',
  GET_MARKETS_SUCCESS = 'tsapp/markets/GET_MARKETS_SUCCESS',
  GET_MARKETS_FAILURE = 'tsapp/markets/GET_MARKETS_FAILURE',
}

export const MarketsActions = {
  getMarketsRequest: () => createAction(MarketsActionTypes.GET_MARKETS_REQUEST),
  getMarketsSuccess: (marketsById: MarketById, allIds: string[]) =>
    createAction(MarketsActionTypes.GET_MARKETS_SUCCESS, { marketsById, allIds }),
  getMarketsFailure: (error: string) =>
    createAction(MarketsActionTypes.GET_MARKETS_FAILURE, { error }),
}

export type Actions = ActionsUnion<typeof MarketsActions>

// Reducer
export interface MarketById {
  [exchangeId: string]: Market
}

export interface MarketsState {
  readonly byId: MarketById
  readonly allIds: string[]
}

const InitialState: MarketsState = {
  byId: {},
  allIds: [],
}

export function reducer(state: MarketsState = InitialState, action: Actions) {
  switch (action.type) {
    case MarketsActionTypes.GET_MARKETS_SUCCESS:
      return { ...state, byId: action.payload.marketsById, allIds: action.payload.allIds }
    default:
      return state
  }
}
