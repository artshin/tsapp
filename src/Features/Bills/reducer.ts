import { Bill } from '../../Models'
import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'

// Actions
enum BillsActionTypes {
  GET_BILLS_REQUEST = 'tsapp/markets/GET_BILLS_REQUEST',
  GET_BILLS_SUCCESS = 'tsapp/markets/GET_BILLS_SUCCESS',
  GET_BILLS_FAILURE = 'tsapp/markets/GET_BILLS_FAILURE',
}

export const BillsActions = {
  getBillsRequest: () => createAction(BillsActionTypes.GET_BILLS_REQUEST),
  getBillsSuccess: (marketsById: BillById, allIds: string[]) =>
    createAction(BillsActionTypes.GET_BILLS_SUCCESS, { marketsById, allIds }),
  getBillsFailure: (error: string) => createAction(BillsActionTypes.GET_BILLS_FAILURE, { error }),
}

export type Actions = ActionsUnion<typeof BillsActions>

// Reducer
export interface BillById {
  [exchangeId: string]: Bill
}

export interface BillsReducer {
  readonly byId: BillById
  readonly allIds: string[]
}

const InitialState: BillsReducer = {
  byId: {},
  allIds: [],
}

export function reducer(state: BillsReducer = InitialState, action: Actions) {
  switch (action.type) {
    case BillsActionTypes.GET_BILLS_SUCCESS:
      return { ...state, byId: action.payload.marketsById, allIds: action.payload.allIds }
    default:
      return state
  }
}
